import DefaultTheme from 'vitepress/theme'
import {onMounted, watch} from "vue";
import {useRouter} from "vitepress";
import './style.css'

export default {
  ...DefaultTheme,
  setup() {
    const defaultSetup = DefaultTheme.setup ? DefaultTheme.setup() : undefined;
    const router = useRouter();
    
    const updateTexts = () => {
      // Traduz textos
      Array.from(document.querySelectorAll("body *")).filter(el => [
        "note", "important", "tip", "previous page", "next page", "caution", "search"
      ].includes(el.textContent.toLowerCase())).forEach(el => {
        switch (el.textContent.toLowerCase()) {
          case 'note':
            el.textContent = 'NOTA';
            break;
          case 'important':
            el.textContent = 'IMPORTANTE';
            break;
          case 'tip':
            el.textContent = 'SAIBA MAIS';
            break;
          case 'caution':
            el.textContent = 'ATENÇÃO';
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
    
    onMounted(() => {
      updateTexts();
    });
    
    router.onAfterRouteChanged = (() => {
      updateTexts();
    })
    
    watch(() => {
      updateTexts()
    });
    
    return defaultSetup;
  },
};
