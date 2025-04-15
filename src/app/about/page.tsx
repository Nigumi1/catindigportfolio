'use client'

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Earth } from 'lucide-react';

const BLUR_FADE_DELAY = 0.04;

export default function About() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <BlurFade delay={BLUR_FADE_DELAY}>
                          <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                          </Avatar>
                        </BlurFade>
                        <div className="flex-col flex flex-1 space-y-1.5">
                          <BlurFadeText
                            delay={BLUR_FADE_DELAY}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`${DATA.name}`}
                          />
                            <div className="flex flex-wrap gap-3 items-center">
                                {Object.entries(DATA.contact.social)
                                    .filter(([_, val]) => (val as { info?: boolean }).info)
                                    .map(([key, val], idx) => (
                                    <BlurFade key={idx} delay={BLUR_FADE_DELAY + idx * 0.05}>
                                        <a
                                        href={val.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 rounded-md border px-3 py-1 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 bg-background text-dark-foreground border-border"
                                        >
                                        <val.icon className="w-4 h-4" />
                                        <span>{val.name}</span>
                                        </a>
                                    </BlurFade>
                                    ))}
                            </div>

                        </div>
                        
                    </div>
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <div className="flex flex-wrap gap-3 items-center">
                                <Earth />Asia/Manila
                            </div>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            {DATA.languages.map((lang, idx) => (
                                <Badge className="ml-1 mr-1" key={idx}>{lang}</Badge>
                            ))}
                        </BlurFade>
                    </div>

                </div>
            </section>
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {DATA.summary}
                </Markdown>
                </BlurFade>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                        <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    {DATA.work.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <ResumeCard
                        key={work.company}
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                        />
                    </BlurFade>
                    ))}
                </div>
            </section>
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                    <BlurFade
                        key={education.school}
                        delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                    >
                        <ResumeCard
                        key={education.school}
                        href={education.href}
                        logoUrl={education.logoUrl}
                        altText={education.school}
                        title={education.school}
                        subtitle={education.degree}
                        period={`${education.start} - ${education.end}`}
                        />
                    </BlurFade>
                    ))}
                </div>
            </section>
    </main>
    );
}