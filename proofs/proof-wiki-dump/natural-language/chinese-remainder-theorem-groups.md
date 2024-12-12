# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem_(Groups)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.In particular: incompletePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $G$ be a group.
Let $N_1, \ldots, N_n$ for some $n \ge 1$ be normal subgroups of $G$.
Let $\pi_i: G \rightarrow G / N_i$ be the canonical projections.
Then the homomorphism $\pi: G \to G / N_1 \times \cdots \times G / N_n$ defined as:

$\map \pi x = \tuple {\map {\pi_1} x, \ldots, \map {\pi_n} x}$
has the kernel $\ds N := \bigcap_{i \mathop = 1}^n N_i$.
Further, $\pi$ is surjective if and only if the normal subgroups have the following property:

$\ds \forall k \le n - 1: N_{k + 1} \bigcap_{i \mathop = 1}^k N_i = G$


Proof
The mapping $\pi$ is indeed a group homomorphism, because each canonical projection $\pi_i: G \to G / N_i$ is a group homomorphism.
The kernel of $\pi$ is given by:

$\ds \ker \pi = \set {x \in G: \forall i, 1 \le i \le n: \map {\pi_i} x = \map {\pi_i} e} = \set {x \in G: \forall i, 1 \le i \le n: x \in N_i} = \bigcap_{1 \mathop \le i \mathop \le n} N_i =: N$
We will now establish the necessity and sufficiency of the condition for surjectivity of $\pi$.
Indeed, we will demonstrate that if $\pi$ is surjective, then:

$\ds \forall k: N_k \bigcap_{j \mathop \ne k} N_j = G$
which will complete the proof together with a deduction of surjectivity from the condition that:

$\ds \forall k \le n - 1: N_{k + 1} \bigcap_{i \mathop = 1}^k N_i = G$


Necessary Condition
We will start by showing the condition is necessary for surjectivity.
So suppose $\pi$ is surjective.
Let $x \in G$ be arbitrary.
Then for each $i$, there is $u_i \in G$ such that $\map {\pi_i} {u_i} = \map {\pi_i} x$ and $\map {\pi_j} {u_i} = \map {\pi_j} e$ for $j \ne i$.
Note that $\map {\pi_i} {u_i^{-1} x} = \map {\pi_i} {u_i}^{-1} \map {\pi_i} x = \map {\pi_i} e$.
Therefore, $u_i \in N_j$ for $j \neq i$ and $u_i^{-1} x \in N_i$.
Hence for all $i \ne j$, we find:

$\ds x = u_i \paren {u_i^{-1} x} \in N_j \bigcap_{m \mathop \ne i} N_m$
As $x$ was arbitrary, this completes the proof that $\ds N_j \bigcap_{m \mathop \ne i} N_m = G$.
$\Box$


Sufficient Condition
We will use induction on $n$, where the base case $n = 1$ is trivial.
By induction, assume the result for the case $n$.
Now take any $x_1, \ldots, x_n, y \in G$.
We will produce an element $g$ with $\map \pi g = \tuple {\map {\pi_1} {x_1}, \ldots, \map {\pi_n} {x_n}, \map {\pi_{n + 1} } y}$.
First, by the induction hypothesis, we can find an $x \in G$ such that we have $\map {\pi_i} x = \map {\pi_i} {x_i}$ for all $i \le n$.
Recall our assumption that $\ds N_{n + 1} \bigcap_{i \mathop = 1}^n N_i = G$.
In particular, we can choose $a \in N_{n + 1}$ and $\ds b \in \bigcap_{i \mathop = 1}^n N_i$ such that $y^{-1} x = a b$.
Equivalently, we have $y a = x b^{-1}$.
Thus for $i \le n$, we have $\map {\pi_i} {y a} = \map {\pi_i} {x b^{-1} } = \map {\pi_i} x = \map {\pi_i} {x_i}$.
Further, we have $\map {\pi_{n + 1} } {y a} = \map {\pi_{n + 1} }y$.
This means that $g = y a$ is the desired element.
This concludes the proof of the sufficiency.
$\blacksquare$


Also see
Chinese Remainder Theorem (Commutative Algebra)
Chinese Remainder Theorem




