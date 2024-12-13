# 

Source: https://proofwiki.org/wiki/User:Lord_Farin/Sandbox/Completeness/Replacement_Tautology

Theorem
Let $\mathcal L$ be the language of propositional logic.
Let $\mathbf A, \mathbf A'$ be WFFs of $\mathcal L$.
Let $\mathbf B$ be another WFF.
Suppose that $\mathbf A \iff \mathbf A'$ is a tautology for boolean interpretations.

Then:

$\mathbf B \iff \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$
is also a tautology, where $\mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$ denotes the substitution of $\mathbf A'$ for $\mathbf A$ in $\mathbf B$.


Proof
Since $\mathbf A \iff \mathbf A'$ is a tautology, we have for all boolean interpretations $v: \mathcal L \to \set{ T, F }$:

$v \paren{ \mathbf A \iff \mathbf A' } = T$
By definition of $\iff$ under boolean interpretations, we have that:

$v \paren{ \mathbf A } = v \paren{ \mathbf A' }$

Now if $\mathbf B = \mathbf A$, then $\mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } = \mathbf A'$, and the result is immediate.
Next, proceed by the Principle of Structural Induction on $\mathbf B$.

If $\mathbf B = p$ for a propositional symbol $p$, then $\mathbf A$ does not occur in $\mathbf B$ and hence:

$\mathbf B \iff \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$
reduces to:

$p \iff p$
which is a tautology by Biconditional is Reflexive.

If $\mathbf B = \mathbf B_1 \circ \mathbf B_2$ for $\circ \in \set{ \land, \lor, \implies, \impliedby, \iff }$, then for any boolean interpretation $v$:














\(\ds v \paren{ \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } }\)

\(=\)







\(\ds v \paren{ \mathbf B_1 \paren{ \mathbf A' \mathbin{//} \mathbf A } \circ \mathbf B_2 \paren{ \mathbf A' \mathbin{//} \mathbf A } }\)





Since $\mathbf B \ne \mathbf A$














\(\ds \)

\(=\)







\(\ds f^\circ \paren{ v \paren{ \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } }, v \paren{ \mathbf B_2 \paren{ \mathbf A' \mathbin{//} \mathbf A } } }\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds f^\circ \paren{ v \paren{ \mathbf B_1 }, v \paren{ \mathbf B_2 } }\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds v \paren{ \mathbf B }\)





Definition of $\mathbf B$



hence $\mathbf B \iff \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A }$.

Lastly if $\mathbf B = \neg \mathbf B_1$, then for any boolean interpretation $v$:














\(\ds v \paren{ \mathbf B \paren{ \mathbf A' \mathbin{//} \mathbf A } }\)

\(=\)







\(\ds v \paren{ \neg \mathbf B_1 \paren{ \mathbf A' \mathbin{//} \mathbf A } }\)





Since $\mathbf B \ne \mathbf A$














\(\ds \)

\(=\)







\(\ds f^\neg \paren{ v \paren{ \mathbf B_1 \paren{ \mathbf A' \mathbin{//} \mathbf A } } }\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds f^\neg \paren{ v \paren{ \mathbf B_1 } }\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds v \paren{ \mathbf B }\)





Definition of $\mathbf B$




Hence the result by the Principle of Structural Induction.
$\blacksquare$





