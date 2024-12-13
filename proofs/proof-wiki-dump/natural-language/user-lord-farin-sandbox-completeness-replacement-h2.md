# 

Source: https://proofwiki.org/wiki/User:Lord_Farin/Sandbox/Completeness/Replacement_H2

Theorem
Let $\mathcal L$ be the language of propositional logic.
Let $\mathbf A, \mathbf A'$ be WFFs of $\mathcal L$.
Let $\mathbf B$ be another WFF.
Suppose that $\mathbf A \iff \mathbf A'$ is a theorem for $\mathscr H_2$, Instance 2 of the Hilbert proof systems.

Then:

$\mathbf B \iff \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$
is also a theorem of $\mathscr H_2$, where $\mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$ denotes the substitution of $\mathbf A'$ for $\mathbf A$ in $\mathbf B$.


Proof
If $\mathbf B = \mathbf A$, then the result is immediate.
Otherwise, proceed by the Principle of Structural Induction on $\mathbf B$.

If $\mathbf B = p$ for some propositional symbol $p$, then:

$\mathbf B \iff \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$
reduces to:

$p \iff p$
which is the statement of Biconditional is Reflexive.

If $\mathbf B = \mathbf B_1 \lor \mathbf B_2$, then since $\mathbf B \ne \mathbf A$:

$\mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } = \mathbf B_1 \paren{ \mathbf A' \mathbin{//} \mathbf A } \lor \mathbf B_2 \paren{ \mathbf A' \mathbin{//} \mathbf A }$
Using $RST 4$ and commutation the desired equivalence readily follows.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

If $\mathbf B = \neg \mathbf B_1$, then since $\mathbf B \ne \mathbf A$:

$\mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } = \neg \mathbf B_1 \paren{ \mathbf A' \mathbin{//} \mathbf A }$
Using the rule of contraposition, the desired equivalence readily follows.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

By $RST 2$, the cases $\land$, $\implies$ and $\iff$ are covered in terms of $\lor$ and $\neg$.
Hence the result, by the Principle of Structural Induction.
$\blacksquare$





