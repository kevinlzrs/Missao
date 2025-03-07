const perguntas = [[
    //Ginástica
    {
        enunciado: "Você está prestes a iniciar sua rotina no solo. Qual é sua primeira acrobacia?",
        alternativas: [
            {
                texto: "Um duplo mortal com pirueta.",
                afirmacao: "O duplo mortal com pirueta foi executado perfeitamente, impressionando os juízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Um salto simples.",
                afirmacao: "O salto simples foi bem executado, mas os juízes esperavam algo mais desafiador. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está na trave de equilíbrio. Qual é sua próxima sequência?",
        alternativas: [
            {
                texto: "Uma série de saltos com giros complexos.",
                afirmacao: "A série de saltos com giros complexos foi realizada com precisão. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma sequência de passos básicos.",
                afirmacao: "A sequência de passos básicos foi segura, mas sem grandes dificuldades. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "No cavalo com alças, você decide tentar um movimento arriscado. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Uma saída com dupla pirueta.",
                afirmacao: "A saída com dupla pirueta foi realizada com perfeição. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma saída simples.",
                afirmacao: "A saída simples foi bem executada, mas faltou complexidade. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Você está no exercício das barras assimétricas. Qual movimento você escolhe para impressionar os juízes?",
        alternativas: [
            {
                texto: "Um salto de uma barra para a outra com giro.",
                afirmacao: "O salto com giro foi executado com grande habilidade. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma transição simples entre as barras.",
                afirmacao: "A transição simples foi segura, mas sem impacto. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Na prova de salto sobre a mesa, qual salto você realiza?",
        alternativas: [
            {
                texto: "Um salto com dupla pirueta.",
                afirmacao: "O salto com dupla pirueta foi executado de maneira impecável. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Um salto com meia pirueta.",
                afirmacao: "O salto com meia pirueta foi bem realizado, mas os juízes esperavam mais dificuldade. Pontuação moderada.",
                pontos: 0
            }
        ]
    }], [
    //Judô
    {
        enunciado: "Você está no início da luta. Qual é sua primeira técnica?",
        alternativas: [
            {
                texto: "Um golpe de ippon seoi nage (arremesso por cima do ombro).",
                afirmacao: "Você executa um ippon seoi nage perfeitamente, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Um golpe de ouchi gari (rasteira interna).",
                afirmacao: "Você tenta um ouchi gari, mas seu oponente consegue se equilibrar e evitar a queda. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente tenta um ataque. Como você responde?",
        alternativas: [
            {
                texto: "Usa uma técnica de contra-ataque (kaeshi waza).",
                afirmacao: "Seu contra-ataque foi eficaz, derrubando seu oponente e ganhando um wazari (meio ponto).",
                pontos: 1
            },
            {
                texto: "Defende o ataque e se afasta.",
                afirmacao: "Você defende com sucesso, mas não marca pontos.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no chão, em ne-waza (técnicas de solo). Qual é sua próxima ação?",
        alternativas: [
            {
                texto: "Tenta um estrangulamento (shime waza).",
                afirmacao: "Você aplica um estrangulamento eficaz, forçando seu oponente a desistir. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um imobilização (osaekomi waza).",
                afirmacao: "Você consegue imobilizar seu oponente, mas ele escapa antes de você garantir a pontuação máxima. Meio ponto para você.",
                pontos: 1
            }            
        ]
    },
    {
        enunciado: "Você está de pé novamente, o que você faz?",
        alternativas: [
            {
                texto: "Executa um harai goshi (arremesso com a perna varrendo).",
                afirmacao: "Seu harai goshi foi bem executado, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um kouchi gari (rasteira menor).",
                afirmacao: "Seu kouchi gari foi bloqueado pelo seu oponente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente está tentando te imobilizar. Como você reage?",
        alternativas: [
            {
                texto: "Usa uma técnica de escape (hikkomi gaeshi).",
                afirmacao: "Você usa hikkomi gaeshi para escapar da imobilização e contra-atacar. Meio ponto para você.",
                pontos: 1
            },
            {
                texto: "Tenta resistir à imobilização.",
                afirmacao: "Você resiste à imobilização, mas não consegue escapar completamente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    }
    ], [ 
    //Surfe
    {
        enunciado: "Você está se preparando para pegar a primeira onda da bateria. Qual é sua estratégia?",
        alternativas: [
            {
                texto: "Pegar a onda maior e mais desafiadora.",
                afirmacao: "Você pega a onda maior e realiza manobras impressionantes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Pegar uma onda menor e mais fácil.",
                afirmacao: "Você pega a onda menor e realiza manobras básicas. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está surfando uma onda. Qual manobra você tenta?",
        alternativas: [
            {
                texto: "Um aéreo (manobra aérea).",
                afirmacao: "Você executa um aéreo perfeito, impressionando os juízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma rasgada básica.",
                afirmacao: "A rasgada foi bem executada, mas sem grandes desafios. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está se aproximando da seção crítica da onda. O que você faz?",
        alternativas: [
            {
                texto: "Tenta um tubo (entrar na parte oca da onda).",
                afirmacao: "Você entra no tubo e sai com sucesso. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Realiza uma manobra segura.",
                afirmacao: "Você realiza uma manobra segura, mas sem grandes riscos. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Você vê uma série de ondas se aproximando. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Pega a primeira onda da série.",
                afirmacao: "A primeira onda da série foi a melhor e você conseguiu realizar manobras incríveis. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Espera a última onda da série.",
                afirmacao: "A última onda da série foi fraca e não permitiu manobras significativas. Pontuação baixa.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no final da bateria e precisa de uma boa pontuação. O que você faz?",
        alternativas: [
            {
                texto: "Arrisca uma manobra difícil.",
                afirmacao: "A manobra difícil foi bem-sucedida e você conseguiu a pontuação necessária. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Joga seguro com uma manobra básica.",
                afirmacao: "A manobra básica foi bem executada, mas não suficiente para a pontuação necessária. Pontuação moderada.",
                pontos: 0
            }
        ]
    }
    ], [
    //Vôlei
    {
        enunciado: "Você está no saque, qual é a sua estratégia?",
        alternativas: [
            {
                texto: "Sacar uma bola forte e rápida.",
                afirmacao: "O saque forte e rápido passou a bola pelo bloqueio e tocou o chão da quadra adversária. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Sacar uma bola curta e lenta.",
                afirmacao: "O saque curto e lento foi levantado pelo adversário, resultando em um ataque bem-sucedido. Ponto para o adversário.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "O adversário fez um ataque forte. O que você faz?",
        alternativas: [
            {
                texto: "Tenta fazer um bloqueio duplo.",
                afirmacao: "O bloqueio duplo foi eficiente e a bola voltou para a quadra adversária. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Faz uma defesa baixa e rápida.",
                afirmacao: "A defesa baixa e rápida foi boa, mas a bola foi para fora. Ponto para o adversário.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu time está organizando um ataque. Qual é a sua jogada?",
        alternativas: [
            {
                texto: "Levanta a bola para o atacante principal.",
                afirmacao: "O levantamento para o atacante principal resultou em um ataque certeiro. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Faz um toque surpresa para o fundo da quadra adversária.",
                afirmacao: "O toque surpresa para o fundo da quadra adversária foi interceptado. Ponto para o adversário.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "A bola está vindo alta e perto da rede. O que você faz?",
        alternativas: [
            {
                texto: "Tenta um ataque potente.",
                afirmacao: "O ataque potente resultou em uma bola fora. Ponto para o adversário.",
                pontos: 0
            },
            {
                texto: "Faz um toque sutil para enganar o bloqueio.",
                afirmacao: "O toque sutil enganou o bloqueio e a bola caiu na quadra adversária. Ponto para seu time!",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Você está recebendo o saque do adversário. Como você responde?",
        alternativas: [
            {
                texto: "Recebe a bola com um passe alto para organizar a jogada.",
                afirmacao: "O passe alto organizou a jogada e resultou em um bom ataque. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Recebe a bola com uma manchete baixa e rápida.",
                afirmacao: "A manchete baixa e rápida resultou em um erro e a bola não passou. Ponto para o adversário.",
                pontos: 0
            }
        ]
    }
    ],[
        // Futebol / pong
        {
            enunciado: "Qual das seguintes afirmações sobre o tênis de mesa é correta?",
            alternativas: [
                {
                    texto: "O tênis de mesa é jogado com uma bola de plástico e raquetes de madeira, e os jogadores devem manter os pés atrás da linha central da mesa durante o jogo.",
                    afirmacao: "O tênis de mesa é jogado com uma bola de plástico e raquetes de madeira, e os jogadores devem manter os pés atrás da linha central da mesa durante o jogo.",
                    pontos: 1
                },
                {
                    texto: "O tênis de mesa é jogado com uma bola de borracha e raquetes de madeira, e os jogadores podem usar a mesa como apoio durante o jogo.",
                    afirmacao: "A afirmação A está incorreta porque a bola de tênis de mesa é de plástico, e os jogadores não podem usar a mesa como apoio.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Qual das seguintes regras é válida no tênis de mesa?",
            alternativas: [
                {
                    texto: "A bola deve tocar a mesa do lado do adversário uma vez antes de ser devolvida.",
                    afirmacao: "A bola deve tocar a mesa do lado do adversário uma vez antes de ser devolvida.",
                    pontos: 1
                },
                {
                    texto: "O jogador pode deixar a bola tocar a mesa apenas uma vez antes de devolvê-la ao adversário, e não é necessário que a bola toque a mesa do lado do adv",
                    afirmacao: "",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Qual das seguintes afirmações sobre a pontuação no tênis de mesa é correta?",
            alternativas: [
                {
                    texto: "Um jogo de tênis de mesa é vencido por quem chegar a 11 pontos, com a necessidade de vencer por pelo menos dois pontos de diferença.",
                    afirmacao: "Um jogo de tênis de mesa é vencido por quem chegar a 11 pontos, com a necessidade de vencer por pelo menos dois pontos de diferença.",
                    pontos: 1
                },
                {
                    texto: "Um jogo de tênis de mesa é vencido por quem chegar a 21 pontos, com a necessidade de vencer por pelo menos dois pontos de diferença.",
                    afirmacao: "A afirmação A está incorreta porque atualmente os jogos de tênis de mesa são vencidos ao atingir 11 pontos.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Qual das seguintes ações é permitida no tênis de mesa?",
            alternativas: [
                {
                    texto: "O jogador deve usar apenas a raquete para tocar a bola durante o jogo; tocar a bola com qualquer outra parte do corpo resulta em falta.",
                    afirmacao: " O jogador deve usar apenas a raquete para tocar a bola durante o jogo; tocar a bola com qualquer outra parte do corpo resulta em falta.",
                    pontos: 1
                },
                {
                    texto: "O jogador pode usar qualquer parte do corpo para tocar a bola enquanto ela está em jogo.",
                    afirmacao: "A afirmação A está incorreta porque tocar a bola com qualquer parte do corpo além da raquete é considerado uma falta.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "O que acontece quando a bola de tênis de mesa toca a borda da mesa do lado do adversário?",
            alternativas: [
                {
                    texto: "Se a bola toca a borda da mesa e depois cai no lado do adversário, o ponto é concedido ao jogador que fez o saque.",
                    afirmacao: " Se a bola toca a borda da mesa e depois cai no lado do adversário, o ponto é concedido ao jogador que fez o saque.",
                    pontos: 1
                },
                {
                    texto: "Se a bola toca a borda da mesa e depois cai no lado do adversário, o ponto é concedido ao adversário que recebeu o saque.",
                    afirmacao: " A afirmação B está incorreta porque um toque na borda da mesa durante o saque ainda conta como um ponto para o jogador que fez o saque.",
                    pontos: 0
                }
            ]
        }
    ], [
        // ping pong
        {
            enunciado: "Você está em uma cobrança de falta perigosa próxima à área adversária. Qual é sua escolha?",
            alternativas: [
                {
                    texto: "Cobrar diretamente ao gol, mirando o ângulo superior.",
                    afirmacao: "A cobrança foi perfeita, a bola entrou no ângulo sem chances para o goleiro! Alta pontuação para você!",
                    pontos: 1
                },
                {
                    texto: "Passar a bola para um companheiro melhor posicionado.",
                    afirmacao: "O passe foi seguro e sua equipe manteve a posse de bola, mas a chance de gol foi desperdiçada. Pontuação moderada.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Você está conduzindo a bola pelo meio-campo e se depara com dois defensores. Qual é sua ação?",
            alternativas: [
                {
                    texto: "Tentar driblar os defensores e avançar para o ataque.",
                    afirmacao: "O drible foi bem-sucedido e você deixou os defensores para trás, criando uma grande chance para sua equipe! Alta pontuação para você!",
                    pontos: 1
                },
                {
                    texto: "Fazer um passe lateral para manter a posse de bola.",
                    afirmacao: "O passe foi bem executado, mas a jogada perdeu sua progressão ofensiva. Pontuação moderada.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Você está na grande área adversária com a bola dominada. O goleiro se aproxima para tentar defender. Qual é sua escolha?",
            alternativas: [
                {
                    texto: "Tentar um chute colocado no canto oposto.",
                    afirmacao: "O chute foi preciso e o goleiro não conseguiu alcançar! Alta pontuação para você!",
                    pontos: 1
                },
                {
                    texto: "Tentar driblar o goleiro para finalizar com o gol aberto.",
                    afirmacao: "Você tentou driblar o goleiro, mas ele conseguiu interceptar a bola. A chance foi perdida. Pontuação moderada.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Você está defendendo e o adversário está avançando rapidamente em um contra-ataque. O que você faz?",
            alternativas: [
                {
                    texto: "Avança para interceptar o passe antes que chegue ao atacante.",
                    afirmacao: "Sua interceptação foi perfeita e o contra-ataque foi neutralizado! Alta pontuação para você!",
                    pontos: 1
                },
                {
                    texto: "Recua para proteger a área e esperar o apoio de seus companheiros.",
                    afirmacao: "Sua recuada garantiu que o adversário não conseguisse finalizar a jogada, mas você deu espaço para eles avançarem. Pontuação moderada.",
                    pontos: 0
                }
            ]
        },
        {
            enunciado: "Nos minutos finais, sua equipe está vencendo por um gol de diferença. Como você gerencia o tempo restante?",
            alternativas: [
                {
                    texto: "Tentar manter a posse de bola e controlar o ritmo do jogo.",
                    afirmacao: "Sua equipe conseguiu manter a posse e garantir a vitória! Alta pontuação para você!",
                    pontos: 1
                },
                {
                    texto: "Tentar marcar mais um gol para garantir a vitória.",
                    afirmacao: "Você arriscou em busca de outro gol, mas isso deu espaço para o adversário contra-atacar. Pontuação moderada.",
                    pontos: 0
                }
            ]
        },

        {
            enunciado: "Quantos pontos deve ter para se ganhar o jogo?",
            alternativas: [
                {
                    texto: " partida será disputada na melhor de 5 (cinco) sets até 11 (Onze) pontos. ",
                    afirmacao: "sendo que quando tem um empate em 10 a 10 sobe 2 pontos",
                    pontos: 1
                },
                {
                    texto: "5 sets de 5 pontos",
                    afirmacao: "você errou por conta da diferença de",
                    pontos: 0
                }
            ]
        }
    ]
];