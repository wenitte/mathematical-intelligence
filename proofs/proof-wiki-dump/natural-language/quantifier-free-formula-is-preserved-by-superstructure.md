# 

Source: https://proofwiki.org/wiki/Quantifier_Free_Formula_is_Preserved_by_Superstructure

Theorem
Let $\MM, \NN$ be $\LL$-structures such that  $\MM$ is a substructure of $\NN$.
Let $\map \phi {\bar x}$ be a quantifier-free $\LL$-formula, and let $\bar a \in\MM$.

Then $\MM \models \map \phi {\bar a}$ if and only if $\NN \models \map \phi {\bar a}$.


Proof
The proof is done by induction on complexity of formulas.

Note that since interpretations of terms with parameters from $\MM$ are preserved when passing to superstructures, we have that $\map {t^\MM} {\bar a} = \map {t^\NN} {\bar a}$ whenever $t$ is an $\LL$-term and $\bar a$ is in $\MM$.

First, we verify the theorem for atomic formulas.  This is the base for the inductive proof.

Suppose $\phi$ is $t_1 = t_2$ for terms $t_1$ and $t_2$:
We have $\MM \models \map \phi {\bar a}$ if and only if $\MM \models \map {t_1} {\bar a} = \map {t_2} {\bar a}$.
The right hand side of this holds if and only if $\map {t_1^\MM} {\bar a} = \map {t_2^\MM} {\bar a}$.
By the note above, this in turn holds if and only if $\map {t_1^\NN} {\bar a} = \map {t_2^\NN} {\bar a}$, which is equivalent to $\NN \models \map \phi {\bar a}$.

Suppose $\phi$ is $R(t_1, \dots, t_n)$ where $R$ is a relation symbol and each $t_i$ is a term:
We have:

$\MM \models \map \phi {\bar a}$ iff $\paren {\map {t_1^\NN} {\bar a}, \dots, \map {t_n^\NN} {\bar a} } \in R^\MM$
Since $\MM$ is a substructure of $\NN$, the interpretation of $R$ in $\NN$ must extend $R^\MM$, so the right side of this statement is equiavlent to:

$\paren {\map {t_1^\NN} {\bar a}, \dots, \map {t_n^\NN} {\bar a} } \in R^\NN$
By the note above, this in turn is equivalent to:

$\paren {\map {t_1^\NN} {\bar a}, \dots, \map {t_n^\NN} {\bar a} } \in R^\NN$
which is the same as:

$\NN \models \map \phi {\bar a}$

Having verified the theorem for the atomic formulas, we proceed with the inductive step of the proof.

Suppose the result holds for $\psi$, and consider $\neg \psi$:
We have $\MM \models \neg \map \psi {\bar a}$ if and only if $\MM \not \models \map \psi {\bar a}$.
By the inductive hypothesis, the right side of this statement is equivalent to $\NN \not\models \map \psi {\bar a}$, and so the result follows.

Suppose the result holds for $\psi_1$ and $\psi_2$.#
Consider $\psi_1 \wedge \psi_2$:
We have $\MM \models \map {\psi_1} {\bar a} \wedge \map {\psi_2} {\bar a}$ if and only if $\MM \models \map {\psi_1} {\bar a}$ and $\MM \models \map {\psi_2} {\bar a}$.
By the inductive hypothesis, the right hand side of this is equivalent to $\NN \models \map {\psi_1} {\bar a}$ and $\NN \models \map {\psi_2} {\bar a}$.
The result follows, completing the proof.
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




