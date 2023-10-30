export const Header = function (activeTab) {
    return `
        <a ${activeTab === 'alphabet' ? 'style="border-bottom: 1px solid gray"' : ''} href="alphabet.html">درس الحروف والهجاء</a>
        <a ${activeTab === 'airport' ? 'style="border-bottom: 1px solid gray"' : ''} href="airport.html"> في المطار </a>
        <a ${activeTab === 'health_problems' ? 'style="border-bottom: 1px solid gray"' : ''} href="health_problems.html"> الصحة </a>
        <a ${activeTab === 'directions' ? 'style="border-bottom: 1px solid gray"' : ''} href="directions.html"> الاتجاهات </a>
        <a ${activeTab === 'do_are' ? 'style="border-bottom: 1px solid gray"' : ''} href="do_are.html"> are/do </a>
        <a ${activeTab === 'oxford3000' ? 'style="border-bottom: 1px solid gray"' : ''} href="oxford3000.html">Oxford 3000</a>
        <a ${activeTab === 'conversations' ? 'style="border-bottom: 1px solid gray"' : ''} href="conversations.html">محادثات</a>
    `;
}

