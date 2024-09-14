let messages = [
    "Você deixa meu dia mais leve só de estar por perto",
    "Adoro o jeito que você faz tudo ficar mais bonito",
    "Você tem o sorriso mais lindo que já vi",
    "Seu jeito me encanta mais a cada dia",
    "Cada vez que você sorri, eu esqueço o que ia dizer. É meio difícil me concentrar perto de você",
    "Eu estava tentando encontrar algo perfeito para dizer, mas aí percebi que só você já é perfeita",
    "Se eu pudesse escolher qualquer lugar para estar agora, seria ao seu lado",
    "Você tem um jeitinho que faz meu coração bater mais rápido toda vez que te vejo",
    "Se o seu sorriso fosse uma música, eu colocaria no repeat para sempre"
]
const idx_msg = Math.floor(Math.random() * messages.length);

let emogis = [
    "&#128513;",
    "&#128522;",
    "&#128541;",
    "&#128579;",
    "&#129321;",
    "&#129392;",
    "&#128517;"
]
const idx_emg = Math.floor(Math.random() * emogis.length);

$(".message_text").html(`\"${messages[idx_msg]}\"`)
$("#title").html(`Olááá ${emogis[idx_emg]}`)