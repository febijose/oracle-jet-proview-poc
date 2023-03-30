define({"oj-message":{fatal:"Oåterkalleligt",error:"Fel",warning:"Varning",info:"Information",confirmation:"Bekräftelse","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Värdet har inte det förväntade formatet.",detail:"Ange ett värde med det förväntade formatet.","plural-separator":", ",hint:{summary:"Exempel: {exampleValue}",detail:"Ange ett värde i det här formatet: {exampleValue}.","detail-plural":"Ange ett värde i de här formaten: {exampleValue}."},optionHint:{detail:"Ett accepterat värde för alternativet '{propertyName}' är '{propertyValueValid}'.","detail-plural":"Accepterade värden för alternativet '{propertyName}' är '{propertyValueValid}'."},optionTypesMismatch:{summary:"Ett värde för alternativet '{requiredPropertyName}' krävs när alternativet '{propertyName}' har angetts till '{propertyValue}'."},optionTypeInvalid:{summary:"Ett värde med den förväntade typen har inte angetts för alternativet '{propertyName}'."},optionOutOfRange:{summary:"Värdet {propertyValue} är utanför intervallet för alternativet '{propertyName}'."},optionValueInvalid:{summary:"Ett ogiltigt värde, '{propertyValue}', har angetts för alternativet '{propertyName}'."},number:{decimalFormatMismatch:{summary:"Det angivna värdet har inte det förväntade talformatet."},shortLongUnsupportedParse:{summary:"'short' och 'long' stöds inte för konverterartolkning.",detail:"Ändra komponenten till readonly. readonly-fält anropar inte konverterarens parse-funktion."},currencyFormatMismatch:{summary:"Det angivna värdet har inte det förväntade valutaformatet."},percentFormatMismatch:{summary:"Det angivna värdet har inte det förväntade procentformatet."},invalidNumberFormat:{summary:"Det angivna värdet är inte ett giltigt tal.",detail:"Ange ett giltigt tal."}},color:{invalidFormat:{summary:"Ogiltigt färgformat.",detail:"Ogiltig specifikation för färgformatsalternativ."},invalidSyntax:{summary:"Ogiltig färgspecifikation.",detail:"Ange ett färgvärde som är förenligt med CSS3-standard."}},datetime:{datetimeOutOfRange:{summary:"Värdet '{value}' är utanför intervallet för '{propertyName}'.",detail:"Ange ett värde mellan '{minValue}' och '{maxValue}'.",hour:"timme",minute:"minut",second:"sekund",millisec:"millisekund",month:"månad",day:"dag",year:"år","month name":"månadsnamn",weekday:"vardag"},dateFormatMismatch:{summary:"Det angivna värdet har inte det förväntade datumformatet."},invalidTimeZoneID:{summary:"Ogiltigt tidszons-id, {timeZoneID}, har angetts."},nonExistingTime:{summary:"Den angivna tiden finns inte eftersom den infaller under övergången till sommartid."},missingTimeZoneData:{summary:"TimeZone-data saknas. Anropa alla 'ojs/ojtimezonedata' som krävs för att ladda TimeZone-data."},timeFormatMismatch:{summary:"Det angivna värdet har inte det förväntade tidsformatet."},datetimeFormatMismatch:{summary:"Det angivna värdet har inte det förväntade datum- och tidsformatet."},dateToWeekdayMismatch:{summary:"Dagen '{date}' infaller inte på en '{weekday}'.",detail:"Ange en veckodag som motsvarar datumet."},invalidISOString:{invalidRangeSummary:"Värdet '{value}' är utanför intervallet för fältet '{propertyName}' i ISO 8601-strängen '{isoStr}'.",summary:"Det angivna värdet för '{isoStr}' är inte en giltig ISO 8601-sträng.",detail:"Ange en giltig ISO 8601-sträng."}}},"oj-validator":{length:{hint:{min:"Ange {min} eller fler tecken.",max:"Ange högst {max} tecken.",inRange:"Ange {min} till {max} tecken.",exact:"Ange {length} tecken."},messageDetail:{tooShort:"Ange {min} eller fler tecken.",tooLong:"Ange högst {max} tecken."},messageSummary:{tooShort:"Det är för få tecken.",tooLong:"Det är för många tecken."}},range:{number:{hint:{min:"Ange ett tal som är större än eller lika med {min}.",max:"Ange ett tal som är mindre än eller lika med {max}.",inRange:"Ange ett tal mellan {min} och {max}.",exact:"Ange numret {num}."},messageDetail:{rangeUnderflow:"Ange {min} eller ett högre tal.",rangeOverflow:"Ange {max} eller ett lägre tal.",exact:"Ange numret {num}."},messageSummary:{rangeUnderflow:"Numret är för lågt.",rangeOverflow:"Numret är för högt."}},datetime:{hint:{min:"Ange ett datum och en tid som är på eller senare än {min}.",max:"Ange ett datum och en tid som är på eller tidigare än {max}.",inRange:"Ange ett datum och en tid mellan {min} och {max}."},messageDetail:{rangeUnderflow:"Ange datumet till {min} eller senare.",rangeOverflow:"Ange datumet till {max} eller tidigare."},messageSummary:{rangeUnderflow:"Datum och tid är tidigare än det tidigaste datumet och den tidigaste tiden.",rangeOverflow:"Datum och tid är senare än det senaste datumet och den senaste tiden."}},date:{hint:{min:"Ange datumet till {min} eller senare.",max:"Ange datumet till {max} eller tidigare.",inRange:"Ange ett datum mellan {min} och {max}."},messageDetail:{rangeUnderflow:"Ange datumet till {min} eller senare.",rangeOverflow:"Ange datumet till {max} eller tidigare."},messageSummary:{rangeUnderflow:"Datumet är tidigare än det tidigaste datumet.",rangeOverflow:"Datumet är senare än det senaste datumet."}},time:{hint:{min:"Ange tiden till {min} eller senare.",max:"Ange tiden till {max} eller tidigare.",inRange:"Ange en tid mellan {min} och {max}."},messageDetail:{rangeUnderflow:"Ange en tid vid eller efter {min}.",rangeOverflow:"Ange en tid vid eller före {max}."},messageSummary:{rangeUnderflow:"Tiden är tidigare än den tidigaste tiden.",rangeOverflow:"Tiden är senare än den senaste tiden."}}},restriction:{date:{messageSummary:"Datumet {value} är för en avaktiverad post.",messageDetail:"Datumet du har valt är inte tillgängligt. Försök med ett annat datum."}},regExp:{summary:"Formatet är fel.",detail:"Ange tillåtna värden som beskrivs i det här reguljära uttrycket: {pattern}."},required:{summary:"Värde måste anges.",detail:"Ange ett värde."}},"oj-ojEditableValue":{loading:"Laddar",requiredText:"Obligatorisk",helpSourceText:"Mer information..."},"oj-ojInputDate":{done:"Slutför",cancel:"Avbryt",time:"Tid",prevText:"Föregående",nextText:"Nästa",currentText:"Idag",weekHeader:"V.",tooltipCalendar:"Välj datum.",tooltipCalendarTime:"Välj datum/tid.",tooltipCalendarDisabled:"Val av datum är avaktiverat.",tooltipCalendarTimeDisabled:"Val av datum och tid är avaktiverat.",picker:"Väljare",weekText:"Vecka",datePicker:"Datumväljare",inputHelp:"Tryck på Nedåtpil eller Uppåtpil för åtkomst till kalendern.",inputHelpBoth:"Tryck på Nedåtpil eller Uppåtpil för åtkomst till kalendern och Skift+Nedåtpil eller Skift+Uppåtpil för åtkomst till tidslistrutan.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Avbryt",okText:"OK",currentTimeText:"Nu",hourWheelLabel:"Timme",minuteWheelLabel:"Minut",ampmWheelLabel:"för-/eftermiddag",tooltipTime:"Välj tid.",tooltipTimeDisabled:"Val av tid är avaktiverat.",inputHelp:"Tryck på Nedåtpil eller Uppåtpil för åtkomst till tidslistrutan.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Den maximala längden {len} har överskridits.",accessibleMaxLengthRemaining:"{chars} tecken kvar."},"oj-ojInputText":{accessibleClearIcon:"Rensa"},"oj-ojInputPassword":{regexp:{messageDetail:"Värdet måste matcha det här mönstret: '{pattern}'."},accessibleShowPassword:"Visa lösenord.",accessibleHidePassword:"Dölj lösenord."},"oj-ojFilmStrip":{labelAccFilmStrip:"Visar sida {pageIndex} av {pageCount}",labelAccArrowNextPage:"Välj Nästa för att visa nästa sida",labelAccArrowPreviousPage:"Välj Föregående för att visa föregående sida",tipArrowNextPage:"Nästa",tipArrowPreviousPage:"Föregående"},"oj-ojDataGrid":{accessibleSortAscending:"{id} sorterat i stigande ordning",accessibleSortDescending:"{id} sorterat i fallande ordning",accessibleSortable:"{id} kan sorteras",accessibleActionableMode:"Aktivera åtgärdsläge.",accessibleNavigationMode:"Öppnar navigeringsläget, tryck på F2 för att öppna redigerings- eller åtgärdsläget.",accessibleEditableMode:"Öppnar redigeringsläget, tryck på Esc för att navigera utanför datarutnätet.",accessibleSummaryExact:"Det här är ett datarutnät med {rownum} rader och {colnum} kolumner",accessibleSummaryEstimate:"Det här är ett datarutnät med ett okänt antal rader och kolumner",accessibleSummaryExpanded:"Det finns {num} expanderade rader",accessibleRowExpanded:"Raden är expanderad",accessibleExpanded:"Expanderad",accessibleRowCollapsed:"Raden är komprimerad",accessibleCollapsed:"Komprimerad",accessibleRowSelected:"Raden {row} är vald",accessibleColumnSelected:"Kolumnen {column} är vald",accessibleStateSelected:"vald",accessibleMultiCellSelected:"{num} celler är valda",accessibleColumnSpanContext:"{extent} bred",accessibleRowSpanContext:"{extent} hög",accessibleRowContext:"Rad {index}",accessibleColumnContext:"Kolumn {index}",accessibleRowHeaderContext:"Radrubrik {index}",accessibleColumnHeaderContext:"Kolumnrubrik {index}",accessibleRowEndHeaderContext:"Radslutsrubrik {index}",accessibleColumnEndHeaderContext:"Kolumnslutsrubrik {index}",accessibleRowHeaderLabelContext:"Etikett för radrubrik {level}",accessibleColumnHeaderLabelContext:"Etikett för kolumnrubrik {level}",accessibleRowEndHeaderLabelContext:"Etikett för radslutsrubrik {level}",accessibleColumnEndHeaderLabelContext:"Etikett för kolumnslutsrubrik {level}",accessibleLevelContext:"Nivå {level}",accessibleRangeSelectModeOn:"Läget för att lägga till det valda intervallet av celler är aktiverat.",accessibleRangeSelectModeOff:"Läget för att lägga till det valda intervallet av celler är avaktiverat.",accessibleFirstRow:"Du har kommit till den första raden.",accessibleLastRow:"Du har kommit till den sista raden.",accessibleFirstColumn:"Du har kommit till den första kolumnen",accessibleLastColumn:"Du har kommit till den sista kolumnen.",accessibleSelectionAffordanceTop:"Övre urvalshandtag.",accessibleSelectionAffordanceBottom:"Undre urvalshandtag.",accessibleLevelHierarchicalContext:"Nivå {level}",accessibleRowHierarchicalFull:"Rad {posInSet} av {setSize} rader",accessibleRowHierarchicalPartial:"Rad {posInSet} av minst {setSize} rader",accessibleRowHierarchicalUnknown:"Minst rad {posInSet} av minst {setSize} rader",accessibleColumnHierarchicalFull:"Kolumn {posInSet} av {setSize} kolumner",accessibleColumnHierarchicalPartial:"Kolumn {posInSet} av minst {setSize} kolumner",accessibleColumnHierarchicalUnknown:"Minst kolumn {posInSet} av minst {setSize} kolumner",msgFetchingData:"Hämtar data...",msgNoData:"Det finns inga objekt att visa.",labelResize:"Ändra storlek",labelResizeWidth:"Ändra bredd",labelResizeHeight:"Ändra höjd",labelSortAsc:"Sortera i stigande ordning",labelSortDsc:"Sortera i fallande ordning",labelSortRow:"Sortera rad",labelSortRowAsc:"Sortera rad i stigande ordning",labelSortRowDsc:"Sortera rad i fallande ordning",labelSortCol:"Sorteringskolumn",labelSortColAsc:"Sortera kolumn i stigande ordning",labelSortColDsc:"Sortera kolumn i fallande ordning",labelCut:"Klipp ut",labelPaste:"Klistra in",labelCutCells:"Klipp ut",labelPasteCells:"Klistra in",labelCopyCells:"Kopiera",labelAutoFill:"Fyll i automatiskt",labelEnableNonContiguous:"Aktivera icke-kontinuerligt urval",labelDisableNonContiguous:"Avaktivera icke-kontinuerligt urval",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Avbryt",accessibleContainsControls:"Innehåller kontroller",labelSelectMultiple:"Välj flera",labelResizeDialogApply:"Använd",labelResizeFitToContent:"Ändra storlek för att passa",columnWidth:"Bredd i pixlar",rowHeight:"Höjd i pixlar",labelResizeColumn:"Ändra storlek på kolumn",labelResizeRow:"Ändra storlek på rad",resizeColumnDialog:"Ändra storlek på kolumn",resizeRowDialog:"Ändra storlek på rad",collapsedText:"Komprimera",expandedText:"Expandera",tooltipRequired:"Obligatorisk"},"oj-ojRowExpander":{accessibleLevelDescription:"Nivå {level}",accessibleRowDescription:"Nivå {level}, rad {num} av {total}",accessibleRowExpanded:"Raden är expanderad",accessibleRowCollapsed:"Raden är komprimerad",accessibleStateExpanded:"expanderad",accessibleStateCollapsed:"komprimerad"},"oj-ojStreamList":{msgFetchingData:"Hämtar data..."},"oj-ojListView":{msgFetchingData:"Hämtar data...",msgNoData:"Det finns inga objekt att visa.",msgItemsAppended:"{count} objekt har lagts till i slutet.",msgFetchCompleted:"Alla objekt har hämtats.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|Å|Ä|Ö",accessibleReorderTouchInstructionText:"Dubbeltryck och håll. Vänta tills ljudet hörs och dra sedan för att ordna om.",accessibleReorderBeforeItem:"Före {item}",accessibleReorderAfterItem:"Efter {item}",accessibleReorderInsideItem:"In {item}",accessibleNavigateSkipItems:"Hoppar över {numSkip} objekt",labelCut:"Klipp ut",labelCopy:"Kopiera",labelPaste:"Klistra in",labelPasteBefore:"Klistra in före",labelPasteAfter:"Klistra in efter"},"oj-ojWaterfallLayout":{msgFetchingData:"Hämtar data..."},"oj-_ojLabel":{tooltipHelp:"Hjälp",tooltipRequired:"Obligatorisk"},"oj-ojLabel":{tooltipHelp:"Hjälp",tooltipRequired:"Obligatorisk"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Minska stegvis",tooltipIncrement:"Öka stegvis"},"oj-ojTable":{accessibleAddRow:"Ange data för att lägga till en ny rad.",accessibleColumnContext:"Kolumn {index}",accessibleColumnFooterContext:"Kolumnsidfot {index}",accessibleColumnHeaderContext:"Kolumnrubrik {index}",accessibleContainsControls:"Innehåller kontroller",accessibleColumnsSpan:"Sträcker sig över {count} kolumner",accessibleRowContext:"Rad {index}",accessibleSortable:"{id} kan sorteras",accessibleSortAscending:"{id} sorterat i stigande ordning",accessibleSortDescending:"{id} sorterat i fallande ordning",accessibleStateSelected:"vald",accessibleStateUnselected:"ej vald",accessibleSummaryEstimate:"Tabell med {colnum} kolumner och fler än {rownum} rader",accessibleSummaryExact:"Tabell med {colnum} kolumner och {rownum} rader",labelAccSelectionAffordanceTop:"Övre urvalshandtag",labelAccSelectionAffordanceBottom:"Undre urvalshandtag",labelEnableNonContiguousSelection:"Aktivera icke-kontinuerligt urval",labelDisableNonContiguousSelection:"Avaktivera icke-kontinuerligt urval",labelResize:"Ändra storlek",labelResizeColumn:"Ändra storlek på kolumn",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Avbryt",labelResizePopupSpinner:"Ändra storlek på kolumn",labelResizeColumnDialog:"Ändra storlek på kolumn",labelColumnWidth:"Bredd i pixlar",labelResizeDialogApply:"Använd",labelSelectRow:"Välj rad",labelSelectAllRows:"Välj alla rader",labelEditRow:"Redigera rad",labelSelectAndEditRow:"Välj och redigera rad",labelSelectColumn:"Välj kolumn",labelSort:"Sortera",labelSortAsc:"Sortera i stigande ordning",labelSortDsc:"Sortera i fallande ordning",msgFetchingData:"Hämtar data...",msgNoData:"Inga data att visa.",msgInitializing:"Initierar...",msgColumnResizeWidthValidation:"Värdet för bredd måste vara ett heltal.",msgScrollPolicyMaxCountSummary:"Översteg största antal rader för tabellrullning.",msgScrollPolicyMaxCountDetail:"Ladda om med en mindre datamängd.",msgStatusSortAscending:"{0} sorterat i stigande ordning.",msgStatusSortDescending:"{0} sorterat i fallande ordning.",tooltipRequired:"Obligatorisk"},"oj-ojTabs":{labelCut:"Klipp ut",labelPasteBefore:"Klistra in före",labelPasteAfter:"Klistra in efter",labelRemove:"Ta bort",labelReorder:"Sortera om",removeCueText:"Kan tas bort"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Välj ett värde."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Välj ett värde."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Välj ett värde."},searchField:"Sökfält",noMatchesFound:"Inga träffar",noMoreResults:"Inga fler resultat",oneMatchesFound:"En matchning har hittats",moreMatchesFound:"{num} matchningar hittades",filterFurther:"Det finns fler resultat; använd fler filter."},"oj-ojSwitch":{SwitchON:"På",SwitchOFF:"Av"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Inga träffar",noMoreResults:"Inga fler resultat",oneMatchesFound:"En matchning har hittats",moreMatchesFound:"{num} matchningar hittades",filterFurther:"Det finns fler resultat; använd fler filter."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Välj ett värde."},noMatchesFound:"Inga träffar",oneMatchFound:"En matchning har hittats",multipleMatchesFound:"{num} matchningar hittades",nOrMoreMatchesFound:"{num} eller fler matchningar hittades",cancel:"Avbryt",labelAccOpenDropdown:"expandera",labelAccClearValue:"rensa värde",noResultsLine1:"Inga resultat hittades",noResultsLine2:"Vi hittar ingenting som matchar din sökning."},"oj-ojInputSearch2":{cancel:"Avbryt",noSuggestionsFound:"Inga förslag hittades"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Inga träffar",oneMatchesFound:"En matchning har hittats",moreMatchesFound:"{num} matchningar hittades"},"oj-ojTreeView":{treeViewSelectorAria:"TreeView-väljare {rowKey}",retrievingDataAria:"Hämtar data för noden: {nodeText}",receivedDataAria:"Tog emot data för noden: {nodeText}"},"oj-ojTree":{stateLoading:"Laddar...",labelNewNode:"Ny nod",labelMultiSelection:"Flera val",labelEdit:"Redigera",labelCreate:"Skapa",labelCut:"Klipp ut",labelCopy:"Kopiera",labelPaste:"Klistra in",labelPasteAfter:"Klistra in efter",labelPasteBefore:"Klistra in före",labelRemove:"Ta bort",labelRename:"Ändra namn",labelNoData:"Inga data"},"oj-ojPagingControl":{labelAccPaging:"Sidnumrering",labelAccPageNumber:"Innehållet på sidan {pageNum} har laddats",labelAccNavFirstPage:"Första sidan",labelAccNavLastPage:"Sista sidan",labelAccNavNextPage:"Nästa sida",labelAccNavPreviousPage:"Föregående sida",labelAccNavPage:"Sida",labelLoadMore:"Visa fler...",labelLoadMoreMaxRows:"Har uppnått den största gränsen på {maxRows} rader",labelNavInputPage:"Sida",labelNavInputPageMax:"av {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} av {pageMax} objekt",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} av minst {pageMax} objekt",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} av cirka {pageMax} objekt",msgItemRangeNoTotal:"{pageFrom}-{pageTo} objekt",fullMsgItem:"{pageTo} av {pageMax} objekt",fullMsgItemAtLeast:"{pageTo} av minst {pageMax} objekt",fullMsgItemApprox:"{pageTo} av cirka {pageMax} objekt",msgItemNoTotal:"{pageTo} objekt",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"av",msgItemRangeOfAtLeast:"med minst",msgItemRangeOfApprox:"med cirka",msgItemRangeItems:"objekt",tipNavInputPage:"Gå till sida",tipNavPageLink:"Gå till sidan {pageNum}",tipNavNextPage:"Nästa",tipNavPreviousPage:"Föregående",tipNavFirstPage:"Första",tipNavLastPage:"Sista",pageInvalid:{summary:"Det angivna sidvärdet är ogiltigt.",detail:"Ange ett värde större än 0."},maxPageLinksInvalid:{summary:"Värdet för maxPageLinks är ogiltigt.",detail:"Ange ett värde större än 4."}},"oj-ojMasonryLayout":{labelCut:"Klipp ut",labelPasteBefore:"Klistra in före",labelPasteAfter:"Klistra in efter"},"oj-panel":{labelAccButtonExpand:"Expandera",labelAccButtonCollapse:"Komprimera",labelAccButtonRemove:"Ta bort",labelAccFlipForward:"Vänd framåt",labelAccFlipBack:"Vänd bakåt",tipDragToReorder:"Dra för att ändra ordning",labelAccDragToReorder:"Dra för att sortera om. Snabbmeny är tillgänglig"},"oj-ojChart":{labelDefaultGroupName:"Grupp {0}",labelSeries:"Serie",labelGroup:"Grupp",labelDate:"Datum",labelValue:"Värde",labelTargetValue:"Mål",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procentsats",labelLow:"Låg",labelHigh:"Hög",labelOpen:"Öppna",labelClose:"Stäng",labelVolume:"Volym",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Lägst",labelMax:"Högst",labelOther:"Övrigt",tooltipPan:"Panorera",tooltipSelect:"Välj textremsa",tooltipZoom:"Markeringszoom",componentName:"Diagram"},"oj-dvtBaseGauge":{componentName:"Mätare"},"oj-ojDiagram":{promotedLink:"{0}-länk",promotedLinks:"{0}-länkar",promotedLinkAriaDesc:"Indirekt",componentName:"Diagram"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dagar",accessibleDurationHours:"{0} timmar",accessibleTaskInfo:"Starttiden är {0}, sluttiden är {1}, tidslängden är {2}",accessibleMilestoneInfo:"Tiden är {0}",accessibleRowInfo:"Rad {0}",accessibleTaskTypeMilestone:"Milstolpe",accessibleTaskTypeSummary:"Översikt",accessiblePredecessorInfo:"Föregående {0}",accessibleSuccessorInfo:"Efterföljande {0}",accessibleDependencyInfo:"Beroendetypen {0}, ansluter {1} till {2}",startStartDependencyAriaDesc:"början till början",startFinishDependencyAriaDesc:"början till slut",finishStartDependencyAriaDesc:"slut till början",finishFinishDependencyAriaDesc:"slut till slut",tooltipZoomIn:"Zooma in",tooltipZoomOut:"Zooma ut",labelLevel:"Nivå",labelRow:"Rad",labelStart:"Början",labelEnd:"Slut",labelDate:"Datum",labelBaselineStart:"Start för utgångsvärde",labelBaselineEnd:"Slut för utgångsvärde",labelBaselineDate:"Datum för utgångsvärde",labelDowntimeStart:"Start på stilleståndstid",labelDowntimeEnd:"Slut på stilleståndstid",labelOvertimeStart:"Start på övertid",labelOvertimeEnd:"Slut på övertid",labelAttribute:"Attribut",labelLabel:"Etikett",labelProgress:"Förlopp",labelMoveBy:"Flytta med",labelResizeBy:"Ändra storlek per",taskMoveInitiated:"Uppgiftsflytt har initierats",taskResizeEndInitiated:"Slut på storleksändring av uppgift har initierats",taskResizeStartInitiated:"Start på storleksändring av uppgift har initierats",taskMoveSelectionInfo:"{0} andra valda",taskResizeSelectionInfo:"{0} andra valda",taskMoveInitiatedInstruction:"Använd piltangenterna för att flytta",taskResizeInitiatedInstruction:"Använd piltangenterna för att ändra storlek",taskMoveFinalized:"Uppgiftsflytt har slutförts",taskResizeFinalized:"Storleksändring av uppgift har slutförts",taskMoveCancelled:"Uppgiftsflytt har avbrutits",taskResizeCancelled:"Storleksändring av uppgift har avbrutits",taskResizeStartHandle:"Startreferens för storleksändring av uppgift",taskResizeEndHandle:"Slutreferens för storleksändring av uppgift"},"oj-ojLegend":{componentName:"Förklaring",tooltipExpand:"Expandera",tooltipCollapse:"Komprimera"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Övrigt",labelGroup:"Grupp",labelSize:"Storlek",labelAdditionalData:"Ytterligare data",componentName:"{0}-ruta"},"oj-ojPictoChart":{componentName:"Bilddiagram"},"oj-ojSparkChart":{componentName:"Diagram"},"oj-ojSunburst":{labelColor:"Färg",labelSize:"Storlek",tooltipExpand:"Expandera",tooltipCollapse:"Komprimera",componentName:"Solstråle"},"oj-ojTagCloud":{componentName:"Taggmoln"},"oj-ojThematicMap":{componentName:"Tematisk mappning",areasRegion:"Områden",linksRegion:"Länkar",markersRegion:"Markörer"},"oj-ojTimeAxis":{componentName:"Tidsaxel"},"oj-ojTimeline":{componentName:"Tidslinje",accessibleItemDesc:"Beskrivningen är {0}.",accessibleItemEnd:"Sluttiden är {0}.",accessibleItemStart:"Starttiden är {0}.",accessibleItemTitle:"Rubriken är {0}.",labelSeries:"Serie",tooltipZoomIn:"Zooma in",tooltipZoomOut:"Zooma ut",labelStart:"Början",labelEnd:"Slut",labelAccNavNextPage:"Nästa sida",labelAccNavPreviousPage:"Föregående sida",tipArrowNextPage:"Nästa",tipArrowPreviousPage:"Föregående",navArrowDisabledState:"Inaktiv",labelDate:"Datum",labelTitle:"Rubrik",labelDescription:"Beskrivning",labelMoveBy:"Flytta med",labelResizeBy:"Ändra storlek per",itemMoveInitiated:"Objektsflytt initierad",itemResizeEndInitiated:"Slut på storleksändring av objekt initierad",itemResizeStartInitiated:"Start på storleksändring av objekt initierad",itemMoveSelectionInfo:"{0} andra valda",itemResizeSelectionInfo:"{0} andra valda",itemMoveInitiatedInstruction:"Använd piltangenterna för att flytta",itemResizeInitiatedInstruction:"Använd piltangenterna för att ändra storlek",itemMoveFinalized:"Objektsflytt slutförd",itemResizeFinalized:"Storleksändring av objekt slutförd",itemMoveCancelled:"Objektsflytt avbruten",itemResizeCancelled:"Storleksändring av objekt avbruten",itemResizeStartHandle:"Startreferens för storleksändring av objekt",itemResizeEndHandle:"Slutreferens för storleksändring av objekt"},"oj-ojTreemap":{labelColor:"Färg",labelSize:"Storlek",tooltipIsolate:"Isolera",tooltipRestore:"Återställ",componentName:"Trädmappning"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"k",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"G",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"P",labelInvalidData:"Ogiltiga data",labelNoData:"Inga data att visa",labelClearSelection:"Rensa urval",labelDataVisualization:"Datavisualisering",stateSelected:"Vald",stateUnselected:"Ej vald",stateMaximized:"Maximerad",stateMinimized:"Minimerad",stateExpanded:"Expanderad",stateCollapsed:"Komprimerad",stateIsolated:"Isolerad",stateHidden:"Dold",stateVisible:"Synlig",stateDrillable:"Borrningsbar",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} av {1}",accessibleContainsControls:"Innehåller kontroller"},"oj-ojRatingGauge":{labelInvalidData:"Ogiltiga data",labelNoData:"Inga data att visa",labelClearSelection:"Rensa urval",labelDataVisualization:"Datavisualisering",stateSelected:"Vald",stateUnselected:"Ej vald",stateMaximized:"Maximerad",stateMinimized:"Minimerad",stateExpanded:"Expanderad",stateCollapsed:"Komprimerad",stateIsolated:"Isolerad",stateHidden:"Dold",stateVisible:"Synlig",stateDrillable:"Borrningsbar",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} av {1}",accessibleContainsControls:"Innehåller kontroller",componentName:"Mätare"},"oj-ojStatusMeterGauge":{labelInvalidData:"Ogiltiga data",labelNoData:"Inga data att visa",labelClearSelection:"Rensa urval",labelDataVisualization:"Datavisualisering",stateSelected:"Vald",stateUnselected:"Ej vald",stateMaximized:"Maximerad",stateMinimized:"Minimerad",stateExpanded:"Expanderad",stateCollapsed:"Komprimerad",stateIsolated:"Isolerad",stateHidden:"Dold",stateVisible:"Synlig",stateDrillable:"Borrningsbar",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} av {1}",accessibleContainsControls:"Innehåller kontroller",componentName:"Mätare"},"oj-ojNavigationList":{defaultRootLabel:"Navigeringslista",hierMenuBtnLabel:"Hierarkisk menyknapp",selectedLabel:"vald",previousIcon:"Föregående",msgFetchingData:"Hämtar data...",msgNoData:"Det finns inga objekt att visa.",overflowItemLabel:"Mer",accessibleReorderTouchInstructionText:"Dubbeltryck och håll. Vänta tills ljudet hörs och dra sedan för att ordna om.",accessibleReorderBeforeItem:"Före {item}",accessibleReorderAfterItem:"Efter {item}",labelCut:"Klipp ut",labelPasteBefore:"Klistra in före",labelPasteAfter:"Klistra in efter",labelRemove:"Ta bort",removeCueText:"Kan tas bort"},"oj-ojSlider":{noValue:"ojSlider har inget värde",maxMin:"Det största värdet måste vara mindre än eller lika med det minsta värdet",startEnd:"value.start får inte överstiga value.end",valueRange:"Värdet måste vara mellan det minsta värdet och det största värdet",optionNum:"Alternativ {option} är inte ett nummer",invalidStep:"Ogiltigt steg; steg måste vara > 0",lowerValueThumb:"miniatyr för lägre värde",higherValueThumb:"miniatyr för högre värde"},"oj-ojDialog":{labelCloseIcon:"Stäng"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Växlar till snabbmenyn. Tryck på F6 för att navigera mellan snabbmenyn och den associerade kontrollen.",ariaLiveRegionInitialFocusNone:"Snabbmenyn är öppen. Tryck på F6 för att navigera mellan snabbmenyn och den associerade kontrollen.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Öppnar snabbmenyn. Du kan stänga den genom att navigera till den sista länken i den.",ariaLiveRegionInitialFocusNoneTouch:"Snabbmenyn är öppen. Navigera till nästa länk för att växla fokus på snabbmenyn.",ariaFocusSkipLink:"Dubbeltryck för att navigera till den öppna snabbmenyn.",ariaCloseSkipLink:"Dubbeltryck för att stänga den öppna snabbmenyn."},"oj-ojRefresher":{ariaRefreshLink:"Aktivera länken för att förnya innehållet",ariaRefreshingLink:"Förnyar innehållet",ariaRefreshCompleteLink:"Förnyelse är slutförd"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Visa startåtgärder",ariaShowEndActionsDescription:"Visa slutåtgärder",ariaHideActionsDescription:"Dölj åtgärder"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|Å|Ä|Ö",indexerOthers:"#",ariaDisabledLabel:"Ingen matchande grupprubrik",ariaOthersLabel:"tal",ariaInBetweenText:"Mellan {first} och {second}",ariaKeyboardInstructionText:"Tryck på Enter för att välja värde.",ariaTouchInstructionText:"Dubbeltryck och håll för att växla till gestläget och dra sedan uppåt eller nedåt för att justera värdet."},"oj-ojMenu":{labelCancel:"Avbryt",ariaFocusSkipLink:"Fokus är på menyn. Dubbeltryck eller svep för att flytta fokus till det första menyalternativet."},"oj-ojColorSpectrum":{labelHue:"Nyans",labelOpacity:"Opacitet",labelSatLum:"Mättnad/luminans",labelThumbDesc:"Fyrvägsskjutreglage för färgspektrum."},"oj-ojColorPalette":{labelNone:"Ingen"},"oj-ojColorPicker":{labelSwatches:"Färgprov",labelCustomColors:"Anpassade färger",labelPrevColor:"Föregående färg",labelDefColor:"Standardfärg",labelDelete:"Ta bort",labelDeleteQ:"Vill du ta bort?",labelAdd:"Lägg till",labelAddColor:"Lägg till färg",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Nyans",labelSliderSaturation:"Mättnad",labelSliderSat:"Mättnad",labelSliderLightness:"Ljusstyrka",labelSliderLum:"Luminositet",labelSliderAlpha:"Alfa",labelOpacity:"Opacitet",labelSliderRed:"Röd",labelSliderGreen:"Grön",labelSliderBlue:"Blå"},"oj-ojFilePicker":{dropzoneText:"Släpp filer här eller klicka för att ladda upp",singleFileUploadError:"Ladda upp en fil åt gången.",singleFileTypeUploadError:"Du kan inte ladda upp filer av typen {fileType}.",multipleFileTypeUploadError:"Du kan inte ladda upp filer av typen: {fileTypes}.",dropzonePrimaryText:"Dra och släpp",secondaryDropzoneText:"Välj en fil eller släpp en fil här.",secondaryDropzoneTextMultiple:"Välj eller släpp filer här.",unknownFileType:"okänd"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Pågår"},"oj-ojMessage":{labelCloseIcon:"Stäng",categories:{error:"Fel",warning:"Varning",info:"Information",confirmation:"Bekräftelse"}},"oj-ojSelector":{checkboxAriaLabel:"Markera kryssrutan {rowKey}",checkboxAriaLabelSelected:" valda",checkboxAriaLabelUnselected:" ej valda"},"oj-ojMessages":{labelLandmark:"Meddelanden",ariaLiveRegion:{navigationFromKeyboard:"Växlar till meddelanderegionen. Tryck på F6 för att navigera tillbaka till föregående element med fokus.",navigationToTouch:"Meddelanderegionen har nya meddelanden. Använd röstrotorn för att navigera till meddelandelandmärket.",navigationToKeyboard:"Meddelanderegionen har nya meddelanden. Tryck på F6 för att navigera till den senaste meddelanderegionen.",newMessage:"Meddelandekategori {category}. {summary}. {detail}."}},"oj-ojMessageBanner":{close:"Stäng",navigationFromMessagesRegion:"Växlar till meddelanderegionen. Tryck på F6 för att navigera tillbaka till föregående element med fokus.",navigationToMessagesRegion:"Meddelanderegionen har nya meddelanden. Tryck på F6 för att navigera till den senaste meddelanderegionen.",error:"Fel",warning:"Varning",info:"Information",confirmation:"Bekräftelse"},"oj-ojConveyorBelt":{tipArrowNext:"Nästa",tipArrowPrevious:"Föregående"}});