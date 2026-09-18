// Aguarda o carregamento para executar
document.addEventListener('DOMContentLoaded', function () {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputValorConta = document.getElementById('valor-conta');
    const selectDesconto = document.getElementById('desconto-porcentagem');
    const containerResultado = document.getElementById('resultado-container');
    const textoEconomia = document.getElementById('texto-economia');

    btnCalcular.addEventListener('click', function () {
        const valorConta = parseFloat(inputValorConta.value);
        const percentualDesconto = parseFloat(selectDesconto.value);

        // Validacando q o user botou um valor válido
        if (isNaN(valorConta) || valorConta <= 0) {
            alert('Por favor, insere um valor válido para a tua fatura de luz.');
            inputValorConta.focus();
            return;
        }

        // Cálculo da economia mensal e anual
        const economiaMensal = (valorConta * percentualDesconto) / 100;
        const economiaAnual = economiaMensal * 12;

        // Exibe o resultado formatado em Reais (R$)
        textoEconomia.innerHTML = `
            Podes poupar cerca de <strong>R$ ${economiaMensal.toFixed(2).replace('.', ',')}</strong> por mês.<br>
            No final do ano, a tua poupança total será de aproximadamente <strong>R$ ${economiaAnual.toFixed(2).replace('.', ',')}</strong>!
        `;

        // Mostra o bloco de resultado na tela
        containerResultado.style.display = 'block';
    });
});