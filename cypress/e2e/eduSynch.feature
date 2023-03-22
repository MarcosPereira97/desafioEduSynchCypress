Feature: EduSynch Challenge QA 

    Scenario: CEFR Reading Test
        Given que acesso a plataforma 
        And efetuo os procedimentos necessarios para realizar a prova
        When respondo as perguntas 
        Then visualizo a tela final 

    Scenario: CEFR Reading Test with Certificate
        Given que acesso a plataforma 
        And efetuo os procedimentos necessarios para realizar a prova
        When respondo as perguntas 
        And acesso a tela de analise
        Then tenho acesso ao certificado