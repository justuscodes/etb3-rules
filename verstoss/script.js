const rules = new Map();
rules.set(2, `Jegliche Modifikationen am Spiel,
                der Internetverbindung oder des Hostcopmuters, die einem Spieler einen direkten oder indirekten
                Vorteil verschaffen, sind daher bei Betritt des Servers ab- und erst bei Verlassen des Servers
                wieder anzuschalten.`);
rules.set(3, `Wir behalten uns jedoch vor, bei Roleplay, das eindeutig gegen das Wohl der Allgemeinheit gerichtet
                ist, mit den uns zur Verfügung stehenden administrativen Mittel zu handeln.
                Es sollte jedem Spieler zu jeder Zeit möglich sein, ein Roleplay zu verlassen, es sei denn, dieser Spieler ist zeitlich befristete Verträge eingegangen und hat die in den Verträgen benannten Pflichten noch nicht erfüllt.
                Es ist nicht erlaubt, dem Spieler Besitz zu entwenden, sobald er das Roleplay verlässt.
                Sofern der Spieler diesen Besitz jedoch erst durch das Roleplay erhalten hat, hat er keinen Anspruch auf das Behalten dieses Besitzes. Er fällt stattdessen zurück in die Hände des Ursprungsbesitzers.
                Es ist gestattet, den austretenden Spieler aus den Ländereien des Roleplays zu verweisen, es sei denn, der geltende Besitz des Spielers befindet sich in ihnen. Dann ist ein Zugang zu diesem Gebiet zu gewährleisten.
                Es ist gestattet, in Verträgen klar geregelte Vertragsstrafen geltend zu machen.
                Verträge, die einen Spieler zu einer ständigen Teilnahme an einem Roleplay zwingen, sind nichtig. `);
rules.set(4, 'Wir benutzen für das bestmöglichste Spielerlebnis auf dem Server viele unterschiedliche Software. Ein Auftreten von Fehlern ist daher nicht auszuschließen. Jeglicher Versuch zur Ausnutzung dieser Fehler ist zu unterlassen. ');
rules.set(5, 'Nach Erfahrungen des letzten Projektes haben wir viele Änderungen am Hosting-Setup vorgenommen und das Spiel wesentlich flüssiger gemacht. Jeder Versuch, diesem Zustand direkt oder indirekt zu schaden, ist zu unterlassen. ');
rules.set(6, 'Unser Server sollte offen für alle sein. Niemand sollte sich durch Chat-Nachrichten, Stati, Skins, Capes oder Benutzernamen anderer Spieler verletzt fühlen. Es ist zu unterlassen, hassvolle, gewaltverherlichende oder antisemitische Botschaften auf dem Server zu verbreiten. ');
rules.set(7, 'Dieses Regelwerk kann und soll nicht alle Eventualitäten umfassen. Jeder Spieler sollte seine Aktionen mit einem gesunden Menschenverstand tätigen und betrachten. Tätigkeiten und Aktionen, die in den Regeln bereits genauer betrachtet wurden bzw. werden, sind nach diesen Richtlinien einzuschätzen. ');
rules.set(8, 'Wir sehen das Internet nicht als einen rechtsfreien Raum. Wir werden im Falle eines Gesetzesverstoßes sowohl nach eigenem Ermessen agieren, als auch mit den betreffenden Ermittlungsbehörden Kontakt aufnehmen');

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
if (urlParams.has("rule")) {

    if (urlParams.get("rule") === "1") {
        document.getElementById("worauf").textContent = `
            Bitte achte noch einmal besonders auf die Einhaltung unserer Regeln.
        `
    } else {
        let spec_r_t = "";
        const specific_rule = document.getElementById("specificRule");
        rules_arr = urlParams.get("rule").split(',');
        rul_int_arr = [];
        rules_arr.forEach((rule_str) => {
            rul_int_arr.push(Number(rule_str));
        })
        if (rul_int_arr.length > 1) {
            document.getElementById("worauf").textContent = `
                Allgemein sind alle Regeln sehr wichtig. Vielleicht solltest du aber vor allem noch einmal einen Blick auf
                die folgenden Regeln werfen:
            `
        }
        rul_int_arr.forEach((rule_int) => {
            spec_r_t = spec_r_t + "<blockquote>" + rules.get(rule_int) + "</blockquote>";
        })
        specific_rule.innerHTML = spec_r_t;
    }
} else {
    const warning = document.getElementById("noparam");
    warning.innerHTML = `
        <h1>
                Bitte überprüfe, ob du den vollen Link geöffnet hast. 
                Nur dann können wir dir personalisierte Informationen bezüglich deines Falls anzeigen.
        </h1>
    `;
    warning.style = `
    font-size: xxx-large;
    color: red;
    border: 0.2cm solid red;
    width: 100%;
    height: 100%;
    min-height: 100%;
    `;
    document.getElementById("worauf").textContent = `
            Bitte achte noch einmal besonders auf die Einhaltung unserer Regeln.
        `
}