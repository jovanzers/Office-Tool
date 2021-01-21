(self.manageOffice_webpackJsonp = self.manageOffice_webpackJsonp || []).push([[8167], {
    wzrg: function(e) {
        "use strict";
        e.exports = JSON.parse('{"categories":[{"name":"L_MicrosoftOfficePublisher","displayName":"Microsoft Publisher 2016"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_PubOptions","displayName":"Opzioni di Publisher"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Advanced","displayName":"Avanzate"},{"parentCategory":{"ref":"L_Advanced"},"name":"L_ComplexScripts","displayName":"Script complessi"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_General","displayName":"Generale"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Proofing","displayName":"Strumenti di correzione"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_OptionsCustomizeRibbon","displayName":"Personalizzazione barra multifunzione"},{"parentCategory":{"ref":"L_PubOptions"},"name":"L_Save","displayName":"Salva"},{"parentCategory":{"ref":"L_MicrosoftOfficePublisher"},"name":"L_Miscellaneous","displayName":"Varie"}],"policies":[{"parentCategory":{"ref":"L_OptionsCustomizeRibbon"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisplayDeveloperTab","displayName":"Visualizza scheda Sviluppo nella barra multifunzione","explainText":"Questa impostazione di criterio consente di controllare la visualizzazione della scheda Sviluppo nella barra multifunzione.\\n\\nSe si attiva questa impostazione di criterio, la scheda Sviluppo verrà visualizzata nella barra multifunzione.\\n\\nSe si disattiva questa impostazione di criterio, la scheda Sviluppo non verrà visualizzata nella barra multifunzione.\\n\\nSe non si configura questa impostazione di criterio, la scheda Sviluppo non verrà visualizzata nella barra multifunzione, ma sarà possibile modificarne la visibilità tramite un\'impostazione nella finestra di dialogo Opzioni dell\'applicazione.","tags":["L_OptionsCustomizeRibbon","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"developertools"},{"parentCategory":{"ref":"L_General"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowTheNewTemplateGalleryWhenStartingPublisher","displayName":"Mostra la raccolta dei nuovi modelli all\'avvio di Publisher","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_General","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usestartupdlg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_TurnOffDragPreview","displayName":"Disattiva anteprima trascinamento","explainText":"Questa impostazione di criterio consente di determinare se in Publisher verrà visualizzata un\'anteprima di trascinamento semitrasparente o un contorno semplice dell\'oggetto quando quest\'ultimo viene trascinato.\\n\\nSe si attiva questa impostazione di criterio, durante il trascinamento verrà visualizzato solo il contorno dell\'oggetto.  Si tratta dell\'impostazione consigliata per i computer meno recenti a causa dei requisiti di risorse di questa caratteristica.\\n\\nSe si disattiva o non si configura questa impostazione di criterio, durante il trascinamento verrà visualizzata un\'anteprima di trascinamento dell\'oggetto semitrasparente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"uselegacydrag"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":50,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetMaximumNumberOfMRUItemsToDisplaySpinID"}]},"name":"L_SetMaximumNumberOfMRUItemsToDisplay","displayName":"Numero di pubblicazioni nell\'elenco Pubblicazioni recenti","explainText":"Questa impostazione di criterio consente di specificare il numero di voci mostrate nell\'elenco Pubblicazioni recenti visualizzato quando gli utenti scelgono Apri nella scheda File della visualizzazione Backstage.  \\n\\nSe si abilita questa impostazione, è possibile specificare il numero di voci indicando un valore compreso tra 0 e 50. Se si imposta 0, tutte le voci incluse ed escluse vengono nascoste.\\n\\nSe si disabilita o non si configura questa impostazione, verranno mostrati al massimo 25 elementi nell\'elenco Pubblicazioni recenti.\\n\\nNota: se si vuole impedire completamente l\'aggiunta di elementi all\'elenco Pubblicazioni recenti, è possibile abilitare l\'impostazione del criterio di Windows \\"Non mantenere la cronologia dei documenti aperti recentemente\\".","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\file mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"max display","minValue":0,"minValueSpecified":true,"maxValue":20,"maxValueSpecified":true,"inputType":"decimalTextBox","id":"L_SetNumberOfPlacesInTheRecentPlacesListSpinID"}]},"name":"L_SetNumberOfPlacesInTheRecentPlacesList","displayName":"Numero di cartelle nell\'elenco Cartelle recenti","explainText":"Questa impostazione di criterio consente di specificare il numero di voci escluse mostrate nell\'elenco Cartelle recenti visualizzato quando gli utenti scelgono Apri o Salva con nome nella scheda File della visualizzazione Backstage.\\n\\nSe si abilita questa impostazione, è possibile specificare il numero di voci escluse indicando un valore compreso tra 0 e 20. Se si imposta 0, tutte le voci incluse ed escluse vengono nascoste.\\n\\nSe si disabilita o non si configura questa impostazione, verranno mostrate al massimo 5 voci escluse nell\'elenco Cartelle recenti.\\n\\nNota: se si vuole impedire completamente l\'aggiunta di elementi all\'elenco Cartelle recenti, è possibile abilitare l\'impostazione del criterio di Windows \\"Non mantenere la cronologia dei documenti aperti recentemente\\".","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\place mru"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseXPSEnhancedPrintPath","displayName":"Usa il percorso di stampa avanzata XPS","explainText":"Questa impostazione di criterio consente di utilizzare il percorso di stampa avanzato XPS, se disponibile. \\n\\nSe si attiva o non si configura questa impostazione di criterio, verrà utilizzato il percorso di stampa XPS.\\n\\nSe si disattiva questa impostazione di criterio, il percorso di stampa XPS non verrà utilizzato.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"enablexpsprintpathprinting"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallysubstitutefontformissingEAchars","displayName":"Sostituzione automatica tipi di carattere mancanti lingue asiatiche","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"usefontlinking"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"1"},"displayName":"Da sinistra a destra"},{"value":{"string":"256"},"displayName":"Da destra a sinistra"}],"valueName":"defaulttextflow","inputType":"dropdownList","id":"L_SetDefaultTextFlowDirectionDropID"}]},"name":"L_SetDefaultTextFlowDirection","displayName":"Imposta orientamento testo predefinito","explainText":"Questa impostazione di criterio consente di impostare l\'orientamento predefinito del testo tra da destra a sinistra (RTL) a da sinistra a destra (LTR). \\n\\nSe si attiva questa impostazione di criterio, sarà possibile scegliere se il testo verrà scritto da destra a sinistra o da sinistra a destra.\\n\\nSe si disattiva o non si configura questa impostazione di criterio, verrà utilizzato l\'orientamento predefinito del testo.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallySwitchKeyboard","displayName":"Cambio automatico di tastiera in base alla lingua del testo circostante","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autokeybd"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AllowTextToBeDraggedAndDropped","displayName":"Consenti trascinamento della selezione per il testo","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"textdragndrop"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenselectingautomaticallyselectentireword","displayName":"Seleziona automaticamente parola intera durante la selezione","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordsel"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Whenformattingautomaticallyformatentireword","displayName":"Usa formattazione automatica per parola intera","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"autowordformat"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseChinesefontsizes","displayName":"Usa dimensioni tipi di caratteri cinesi","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prcfontsizes"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AutomaticallyHyphenateInNewTextBoxes","displayName":"Sillabazione automatica nelle nuove caselle di testo","explainText":"Consente di selezionare/deselezionare l\'opzione \'\'Automatica nelle nuove caselle di testo\'\'.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"defautohyph"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_ShowScreenTipsonobjects","displayName":"Mostra descrizione sugli oggetti","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showobjecttooltips"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Enableincrementalpublishtoweb","displayName":"Consenti pubblicazione incrementale sul Web","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"incrementalupload"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Sendentirepublicationasasingle","displayName":"Invia l\'intera pagina della pubblicazione come unica immagine JPEG","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\internet","valueName":"emailasimg"},{"parentCategory":{"ref":"L_Advanced"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptuserwhenreapplyingastyle","displayName":"Chiedi conferma prima di riapplicare uno stile","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"prompttoupdatestyle"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"autorecoversaveinterval","required":true,"requiredSpecified":true,"expandable":false,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Minuti (intervallo 1-120):","id":"L_SaveAutoRecoverinfoeveryID"}]},"name":"L_SaveAutoRecoverinfoevery","displayName":"Salva informazioni di salvataggio automatico ogni (minuti)","explainText":"Questa impostazione di criterio consente di specificare l\'intervallo di salvataggio automatico in minuti.\\n\\nSe si attiva questa impostazione di criterio, è possibile specificare l\'intervallo di salvataggio automatico in minuti (intervallo valido: 1-120).\\n\\nSe si disattiva o non si configura questa impostazione di criterio, verrà utilizzato l\'intervallo specificato nell\'interfaccia utente.\\n","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Save"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Allowbackgroundsaves","displayName":"Consenti salvataggio in background","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_Save","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"backgroundsave"},{"parentCategory":{"ref":"L_Proofing"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":1}},"displayName":"Controlla ortografia durante la digitazione"},{"value":{"decimal":{"value":2}},"displayName":"Nascondi errori ortografici"},{"value":{"decimal":{"value":3}},"displayName":"Entrambe"}],"valueName":"publisherspellingoptions","inputType":"dropdownList","id":"L_CheckspellingasyoutypeDropID"}]},"name":"L_Checkspellingasyoutype","displayName":"Controlla ortografia durante la digitazione","explainText":"Questa impostazione di criterio consente di configurare le opzioni per gli errori ortografici.\\n\\nSe si attiva questa impostazione di criterio, è possibile scegliere una delle opzioni seguenti:\\n-  Controlla ortografia durante la digitazione: questa opzione è selezionata.\\n-  Nascondi errori ortografici: questa opzione è selezionata, ma \\"Controlla ortografia durante la digitazione\\" è deselezionata.\\n- Entrambe: sia \\"Controlla ortografia durante la digitazione\\" che \\"Nascondi errori ortografici\\" sono selezionate.\\n\\nSe si disattiva o non si configura questa impostazione di criterio, l\'opzione \\"Controlla ortografia durante la digitazione\\" non verrà selezionata.","tags":["L_Proofing","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\shared tools\\\\proofing tools\\\\1.0\\\\office"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Promptusertosetupprinter","displayName":"Chiedi conferma all\'utente per la configurazione della stampante","explainText":"Consente di visualizzare un messaggio per richiedere l\'avvio della Configurazione guidata stampante quando viene individuata una nuova stampante.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"showprintersetup"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"string":"0"},"displayName":"Da sinistra a destra"},{"value":{"string":"1"},"displayName":"Da destra a sinistra"}],"valueName":"defaultrtl","inputType":"dropdownList","caption":"Direzione predefinita di Publisher","id":"L_defaultpublisherdirection3"}]},"name":"L_DefaultPublisherdirection","displayName":"Direzione predefinita di Publisher","explainText":"Consente di specificare l\'orientamento predefinito del layout.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_UseSequenceChecking","displayName":"Usa controllo sequenza","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"seqcheck"},{"parentCategory":{"ref":"L_ComplexScripts"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_Usetypeandreplace","displayName":"Utilizzo digitazione e sostituzione","explainText":"Consente di selezionare/deselezionare l\'opzione corrispondente nell\'interfaccia utente.","tags":["L_ComplexScripts","L_Advanced","L_PubOptions","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"typereplace"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"string":"1"},"disabledValue":{"string":"0"},"name":"L_AdddoublequotesinHebrewalphabetnumbering","displayName":"Aggiungi virgolette per i numeri dell\'alfabeto ebraico","explainText":"Se si seleziona, verranno aggiunte virgolette (\'\') ai numeri dell\'alfabeto ebraico. | Se si deseleziona, non verranno aggiunte virgolette (\'\') ai numeri dell\'alfabeto ebraico.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"dubquohebalpnum"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"enabledValue":{"decimal":{"value":1}},"disabledValue":{"decimal":{"value":0}},"name":"L_DisableOfficeStartPublisher","displayName":"Disattivare la schermata di avvio di Office per Publisher","explainText":"Questa impostazione di criteri controlla se la schermata Start di Office viene visualizzata all\'avvio di Publisher.\\n\\nSe si abilita questa impostazione di criteri, gli utenti non visualizzeranno la schermata Start di Office quando avviano Publisher.\\n\\nSe si disabilita o non si configura questa impostazione di criteri, gli utenti visualizzeranno la schermata Start di Office quando avviano Publisher.\\n\\nNota: questa impostazione di criteri viene sostituita da \\"Microsoft Office 2016 > Varie > Disabilita la schermata Start di Office per tutte le applicazioni Office\\", se questa impostazione di criteri è stata configurata.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences","valueName":"disableboottoofficestart"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"valueName":"personaltemplates","requiredSpecified":false,"expandable":true,"expandableSpecified":true,"maxLengthSpecified":false,"inputType":"textBox","caption":"Percorso modelli personali","id":"L_PersonalTemplatesPath"}]},"name":"L_PersonalTemplatesPath","displayName":"Percorso modelli personali per Publisher","explainText":"Questa impostazione di criterio specifica il percorso dei modelli personali di un utente. \\n\\nSe si abilita questa impostazione di criterio, gli utenti visualizzeranno tutti i modelli che hanno salvato nel percorso specificato nella scheda Modelli personalizzati della schermata di avvio di Office e in File | Nuovo e quando salvano un modello la cartella predefinita verrà modificata secondo il percorso specificato. \\n\\nSe si disabilita o non si configura questa impostazione di criterio, gli utenti non visualizzeranno i modelli salvati nella scheda Modelli personalizzati della schermata di avvio di Office e in File | Nuovo e quando salvano un modello la cartella predefinita sarà il percorso di salvataggio del documento.","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"},{"parentCategory":{"ref":"L_Miscellaneous"},"supportedOn":{"ref":"windows:SUPPORTED_Windows7"},"elements":{"items":[{"item":[{"value":{"decimal":{"value":0}},"displayName":"In primo piano"},{"value":{"decimal":{"value":2}},"displayName":"Incorporata"},{"value":{"decimal":{"value":1}},"displayName":"Personalizzata"}],"valueName":"officestartdefaulttab","inputType":"dropdownList","caption":"Scheda predefinita","id":"L_DefaultBuiltInTab"}]},"name":"L_DefaultBuiltInTab","displayName":"Scheda predefinita da visualizzare in Publisher nella schermata di avvio di Office e in File | Nuovo","explainText":"Questa impostazione di criterio consente di stabilire cosa viene visualizzato nella scheda predefinita di Publisher nella schermata di avvio di Office e in File | Nuovo. \\n\\nSe si abilita questa impostazione di criterio, è possibile scegliere una delle due opzioni come scheda predefinita nella schermata di avvio di Office e in File | Nuovo:\\n\\n* Incorporati – Gli utenti visualizzeranno la scheda Modelli incorporati come scheda predefinita in Publisher nella schermata di avvio di Office e in File | Nuovo.\\n\\n* Personalizzati – Gli utenti visualizzeranno la scheda Modelli personalizzati come scheda predefinita in Publisher nella schermata di avvio di Office e in File | Nuovo se esistono i modelli (inclusi modelli programmati XML personalizzati, modelli nel percorso modelli gruppo di lavoro, modelli nel percorso modelli personali o modelli di SharePoint).\\n\\nSe si disabilita o non si configura questa impostazione di criterio, gli utenti visualizzeranno la scheda Modelli in primo piano come scheda predefinita in Publisher nella schermata di avvio di Office o in File | Nuovo","tags":["L_Miscellaneous","L_MicrosoftOfficePublisher"],"application":"pub16","key":"software\\\\microsoft\\\\office\\\\16.0\\\\publisher\\\\preferences"}]}')
    }
}]);
