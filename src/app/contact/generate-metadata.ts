import { contactMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return contactMetadata;
}
