# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Cantor%27s_First_Proof

Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
We prove the equivalent result that every sequence $\sequence {x_k}_{k \mathop \in \N}$ omits at least one $x \in \R$.

Let $\sequence {x_k}_{k \mathop \in \N}$ be a sequence of distinct real numbers.
Let a sequence of closed real intervals $\sequence {I_n}$ be defined as follows:
Let:














\(\ds a_k\)

\(=\)







\(\ds \min \set {x_k, x_{k + 1} }\)




















\(\ds b_k\)

\(=\)







\(\ds \max \set {x_k, x_{k + 1} }\)




















\(\ds I_k\)

\(=\)







\(\ds \closedint {a_k} {b_k}\)










Since the terms of $\sequence {x_k}_{k \mathop \in \N}$ are distinct, $a_k \ne b_k$.
Thus $I_k$ is not a singleton.
Let:

$I_{n - 1} = \closedint {a_{n - 1} } {b_{n - 1} }$
It can be assumed that infinitely many of the $x_k$ lie inside $I_{n - 1}$.
Otherwise the proof is complete.

Let $y$ and $z$ be the first two such terms of $\sequence {x_k}_{k \mathop \in \N}$.
Let:














\(\ds a_n\)

\(=\)







\(\ds \min \set {y, z}\)




















\(\ds b_n\)

\(=\)







\(\ds \max \set {y, z}\)




















\(\ds I_n\)

\(=\)







\(\ds \closedint {a_n} {b_n}\)










Thus we have sequences:

$\sequence {a_k}_{k \mathop \in \N}$
$\sequence {b_k}_{k \mathop \in \N}$
with:

$ a_1 < a_2 < \cdots < b_2 < b_1$
So $\sequence {a_k}_{k \mathop \in \N}$ and $\sequence {b_k}_{k \mathop \in \N}$ are monotone, and bounded above and bounded below respectively.
Therefore by the Monotone Convergence Theorem (Real Analysis) both are convergent.
Let:














\(\ds A\)

\(=\)







\(\ds \lim_{k \mathop \to \infty} a_k\)




















\(\ds B\)

\(=\)







\(\ds \lim_{k \mathop \to \infty} b_k\)










Clearly we have $A \le B$.
So:

$\closedint A B \ne \O$
Let $h \in \closedint A B$.
Then:

$\forall k: h \ne a_k, b_k$

We claim that $h \ne x_k$ for all $k$. 
Suppose that $h = x_k$ for some $k$. 
Then there are only finitely many terms in the sequence before $h$ occurs.


This article, or a section of it, needs explaining.In particular: "the sequence" -- which one in particular? There are a few under discussion here.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore only finitely many of the $a_k$ precede $h$.
Let $a_d$ be the last term of the sequence $\sequence {a_k}_{k \mathop \in \N}$ preceding $h$.
We defined $a_{d + 1}$, $b_{d + 1}$ to be interior points of $I_d$, and also $h \in I_{d + 1}$ by the definition of $h$.


This article, or a section of it, needs explaining.In particular: Where are those interior points so defined?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore $a_{d + 1}$ must precede $h$ in the sequence, for the sequence is increasing.
This is a contradiction.


This article, or a section of it, needs explaining.In particular: Specify precisely what assumption this contradiction falsifies.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Historical Note
This proof was first demonstrated by Georg Cantor in $1874$.





