# 

Source: https://proofwiki.org/wiki/Law_of_Identity/Formulation_2/Proof_2

Theorem
Every proposition entails itself:

$\vdash p \implies p$


Proof
Using a tableau proof for instance 1 of a Hilbert proof system:


$p \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \implies \paren {\paren {p \implies p} \implies p} } \implies \paren {\paren {p \implies \paren {p \implies p} } \implies \paren {p \implies p} }$

Axiom 2



$\mathbf A = p, \mathbf B = p \implies p, \mathbf C = p$


2




$p \implies \paren {\paren {p \implies p} \implies p}$

Axiom 1



$\mathbf A = p, \mathbf B = p \implies p$


3




$\paren {p \implies \paren {p \implies p} } \implies \paren {p \implies p}$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4




$p \implies \paren {p \implies p}$

Axiom 1



$\mathbf A = p, \mathbf B = p$


5




$p \implies p$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4



$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 3.3$: Theorem $3.10$




