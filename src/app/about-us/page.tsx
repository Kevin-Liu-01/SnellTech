"use client";
import { Link, Flex, Grid, Box, Text } from "@radix-ui/themes";
import Footer from "../_components/footer";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

// Font files can be colocated inside of `pages`b
export default function AboutUs() {
  return (
    <>
      <main className="h-[calc(100vh-6rem)] font-inter text-primary">
        <section className="relative w-full overflow-hidden bg-snelltechPurple/60 px-4 py-20 dark:bg-snelltechGreen">
          <Box className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <Box className="space-y-4">
              <Text className="font-optiker text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Meet the Team
              </Text>
              <p className="max-w-[600px] text-xl text-foreground/80">
                The student team behind Snelltech Solutions.
              </p>
            </Box>
            <Grid gap="8" columns="3">
              <Flex
                direction="column"
                align="center"
                className="space-y-2 text-center"
              >
                <Image
                  alt="Syona Gupta"
                  className="aspect-[200/200] rounded-full bg-gray-50/30 bg-snelltechPurple object-cover"
                  height="200"
                  src="/images/about/SyonaPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Syona Gupta</h3>
                <p className="text-sm text-foreground/70">
                  Project Lead, 3D Modelling/Printing
                </p>
              </Flex>
              <Flex
                direction="column"
                align="center"
                className="space-y-2 text-center"
              >
                <Image
                  alt="Kevin Liu"
                  className="aspect-[200/200] rounded-full bg-gray-50/30 bg-snelltechPurple object-cover"
                  height="200"
                  src="/images/about/KevinPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Kevin Liu</h3>
                <p className="text-sm text-foreground/70">
                  Software Development, Research, UI/UX
                </p>
              </Flex>
              <Flex
                direction="column"
                align="center"
                className="space-y-2 text-center"
              >
                <Image
                  alt="Shravani Vedagiri"
                  className="aspect-[200/200] rounded-full bg-gray-50/30 bg-snelltechPurple object-cover"
                  height="200"
                  src="/images/about/ShravaniPortrait1.png"
                  width="200"
                />
                <h3 className="text-lg font-semibold">Shravani Vedagiri</h3>
                <p className="text-sm text-foreground/70">
                  Design, Prototyping, Documentation
                </p>
              </Flex>
            </Grid>
          </Box>
        </section>
        <section className="w-full px-8 py-24 md:px-16">
          <Box className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <Flex gap="4" direction="column">
              <h2 className="font-optiker text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Key Features
              </h2>
              <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400">
                Discover the powerful features that make our SnellTech web app a
                must-have for anyone looking to check their vision.
              </p>
              <ul className="grid gap-4 text-lg">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Accurate and reliable vision testing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Easy-to-use interface for all ages
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Personalized results and recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-gray-900 dark:text-gray-50" />
                  Shareable test results
                </li>
              </ul>
              <Link
                className="mr-8 mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-snelltechPurple px-8 font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-snelltechGreen dark:text-gray-950 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/test"
              >
                Try the Test
              </Link>
            </Flex>
            <Grid gap="4" columns="2">
              <Image
                alt="headset"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_headset.png"
                width="300"
              />
              <Image
                alt="control_panel"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_control.png"
                width="300"
              />
              <Image
                alt="test_ui"
                className="aspect-[300/300] rounded-xl object-cover"
                height="300"
                src="/images/about/about_test.png"
                width="300"
              />
              <Image
                alt="technical_drawing"
                className="aspect-[300/300] rounded-xl object-cover invert dark:invert-0"
                height="300"
                src="/images/about/about_tech.png"
                width="300"
              />
            </Grid>
          </Box>
        </section>
        <Footer />
      </main>
    </>
  );
}
