# 

Source: https://proofwiki.org/wiki/Matroid_Base_Substitution_From_Fundamental_Circuit


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B$ be a base of $M$.
Let $y \in S \setminus B$.
Let $\map C {y,B}$ denote the fundamental circuit of $y$ in $B$.
Let $x \in B$.

Then:

$\paren{B \setminus \set x} \cup \set y$ is a base of $M$ if and only if $x \in \map C {y,B}$

That is, $y$ can be substituted for $x$ in $B$ to form another base of $M$ if and only if $x \in \map C {y,B}$.

Proof
Necessary Condition
Let $\paren{B \setminus \set x} \cup \set y$ be a base of $M$.
By definition of the fundamental circuit:

$\map C {y,B} \subseteq B \cup \set y$
and

$\map C {y,B}$ is dependent

Aiming for a contradiction, suppose $x \notin \map C {y,B}$.
Then:

$\map C {y,B} \subseteq \paren{B \setminus \set x} \cup \set y$
By matroid axiom $( \text I 2)$:

$\map C {y,B}$ is independent
This contradicts the fact that:

$\map C {y,B}$ is dependent

It follows that:

$x \in \map C {y,B}$
$\Box$

Sufficient Condition
We prove the contrapositive statement.

Let $\paren{B \setminus \set x} \cup \set y$ not be a base of $M$.
We have:














\(\ds \card{\paren{B \setminus \set x} \cup \set y}\)

\(=\)







\(\ds \card{B \setminus \set x} + \card{\set y}\)





Corollary of Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \paren{\card B - \card{\set x} } + \card{\set y}\)





Cardinality of Set Difference














\(\ds \)

\(=\)







\(\ds \paren{\card B - 1 } + 1\)





Cardinality of Singleton














\(\ds \)

\(=\)







\(\ds \card B\)









From contrapositive statement of Independent Subset is Base if Cardinality Equals Cardinality of Base:

$\paren{B \setminus \set x} \cup \set y$ is a dependent subset of $M$
From Dependent Subset Contains a Circuit there exists a circuit $C'$:

$C' \subseteq \paren{B \setminus \set x} \cup \set y \subseteq B \cup \set y$
From Matroid Base Union External Element has Fundamental Circuit:

$C' = \map C {y,B}$
Hence:

$x \notin \map C {y, B}$

From Rule of Transposition we have:

$x \in \map C {y, B} \implies \paren{B \setminus \set x} \cup \set y$ is a base of $M$
$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 9.$ Circuits, Theorem $1$




