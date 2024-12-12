# 

Source: https://proofwiki.org/wiki/Deduction_Theorem

Theorem
Let $\mathscr H$ be instance 1 of a Hilbert proof system.

Then the deduction rule:

$\dfrac{U,\mathbf A \vdash \mathbf B}{U \vdash \mathbf A \implies \mathbf B}$
is a derived rule for $\mathscr H$.


Proof
For any proof of $U, \mathbf A \vdash \mathbf B$, we indicate how to transform it into a proof of $U \vdash \mathbf A \implies \mathbf B$ without using the deduction rule.
This is done by applying the Second Principle of Mathematical Induction to the length $n$ of the proof of $U,\mathbf A \vdash \mathbf B$.

If $n = 1$, then one of the following must occur:

$\mathbf B \in U$
$\mathbf B = \mathbf A$
$\mathbf B$ is an axiom or a theorem of $\mathscr H$

In the first case, obviously $U \vdash \mathbf B$.
By Axiom 1, $U \vdash \mathbf B \implies \paren {\mathbf A \implies \mathbf B}$.
By Modus Ponens, $U \vdash \mathbf A \implies \mathbf B$.

In the second case, $U \vdash \mathbf A \implies \mathbf A$ by the Law of Identity.

Finally, in the third case, we have $U \vdash \mathbf B$.
As in the first case, we conclude $U \vdash \mathbf A \implies \mathbf B$.

If $n > 1$, the only other option for arriving at $U, \mathbf A \vdash \mathbf B$ is through Modus Ponens.
That is to say, two earlier lines of the proof contain:

$U, \mathbf A \vdash \mathbf C$
$U, \mathbf A \vdash \mathbf C \implies \mathbf B$
for some WFF $\mathbf C$.
But then these sequents have shorter proofs.
Hence, they satisfy the induction hypothesis.
Thus, we may infer:

$U \vdash \mathbf A \implies \mathbf C$
$U \vdash \mathbf A \implies \paren {\mathbf C \implies \mathbf B}$
This allows us to give the following proof of $U \vdash \mathbf A \implies \mathbf B$:



$U \vdash \mathbf A \implies \mathbf B$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$U \vdash \mathbf A \implies \mathbf C$

Hypothesis






2




$U \vdash \mathbf A \implies \paren {\mathbf C \implies \mathbf B}$

Hypothesis






3




$U \vdash \paren {\mathbf A \implies \paren {\mathbf C \implies \mathbf B} } \implies \paren {\paren {\mathbf A \implies \mathbf C} \implies \paren {\mathbf A \implies \mathbf B} }$

Axiom 2






4




$U \vdash \paren {\mathbf A \implies \mathbf C} \implies \paren {\mathbf A \implies \mathbf B}$

Modus Ponendo Ponens: $\implies \mathcal E$

2 ,  3




5




$U \vdash \mathbf A \implies \mathbf B$

Modus Ponendo Ponens: $\implies \mathcal E$

1 ,  4




The result follows by the Second Principle of Mathematical Induction.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): deduction theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): deduction theorem




