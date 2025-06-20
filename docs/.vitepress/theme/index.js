import DefaultTheme from 'vitepress/theme'
import {onMounted, watch} from "vue";
import {useRouter} from "vitepress";
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({app, router, siteData}) {
    if (typeof document === 'undefined') return null;
  },
  setup() {
    if (typeof document === 'undefined') return null;
    
    const defaultSetup = DefaultTheme.setup ? DefaultTheme.setup() : undefined;
    const router = useRouter();
    
    const updateTexts = () => {
      // Traduz textos
      Array.from(document?.querySelectorAll("body *")).filter(el => [
        "note", "important", "tip", "previous page", "next page", "caution", "search", "warning",
      ].includes(el.textContent.toLowerCase())).forEach(el => {
        switch (el.textContent.toLowerCase()) {
          case 'note':
            el.textContent = 'NOTA';
            break;
          case 'important':
            el.textContent = 'IMPORTANTE';
            break;
          case 'warning':
            el.textContent = 'ATENÇÃO';
            break;
          case 'tip':
            el.textContent = 'SAIBA MAIS';
            break;
          case 'caution':
            el.textContent = 'AVISO';
            break;
          case 'previous page':
            el.textContent = 'Página anterior';
            break;
          case 'next page':
            el.textContent = 'Próxima página';
            break;
          case 'search':
            el.innerHTML = 'Pesquisar&nbsp;&nbsp;';
            break;
        }
      })
    }
    
    const updateElementClasses = () => {
      Array.from(document?.querySelectorAll(".VPFeatures.VPHomeFeatures .container .items .item")).forEach((el, i) => {
        if ([0, 1].includes(i)) el.classList.value = "item grid-2"
        else if ([2, 3].includes(i)) el.classList.value = "item grid-4"
        else el.classList.value = "item grid-2"
      })
    }
    
    const callAllFunctions = () => {
      updateTexts();
      updateElementClasses();
    }
    
    onMounted(() => {
      callAllFunctions();
    });
    
    router.onAfterRouteChanged = (() => {
      callAllFunctions();
    })
    
    watch(() => {
      updateTexts();
    });
    
    return defaultSetup;
  },
};
