"use client";
import ReactMarkdown from "react-markdown"; // ✅ import the component
import Badge from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { DATA } from "@/data/resume";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Safari } from "@/components/magicui/safari";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = DATA.projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projects">Projects</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="font-semibold text-foreground/80" aria-current="page">
              {project.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground mb-6">{project.dates}</p>
      {project.carousel?.length > 0 && (
        <Carousel className="mb-10">
        <CarouselContent>
          {project.carousel.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-0 overflow-hidden">
                  
                  <Safari url={project.href || "JC-web"} className="absolute inset-0 w-full h-full z-0" imageSrc={item.src}/>
                 
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      
      )}
      <div className="prose mb-6 dark:prose-invert max-w-none">
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          
          <li key={tech} className="bg-gray-100 px-3 py-1 rounded text-sm dark:bg-gray-800">
            {tech}
          </li>
          
        ))}
      </ul>
      {project.links?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-sm transition-colors hover:bg-muted/50"
            >
              {link.icon}
              <span>{link.type}</span>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
