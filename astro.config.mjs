import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import { register } from "swiper/element/bundle";
import react from "@astrojs/react";

register();

export default defineConfig({
  integrations: [react(), icon()],
  image: {
    service: passthroughImageService(),
  },
});
