# 

Source: https://proofwiki.org/wiki/Chinese_Remainder_Theorem_(Commutative_Algebra)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $A$ be a commutative and unitary ring.


This article, or a section of it, needs explaining.In particular: Can this condition be weakened?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $I_1, \ldots, I_n$ for some $n \ge 1$ be ideals of $A$.
Then the ring homomorphism $\phi: A \to A / I_1 \times \cdots \times A / I_n$ defined as:

$\map \phi x = \tuple {x + I_1, \ldots, x + I_n}$
has the kernel $\ds I := \bigcap_{i \mathop = 1}^n I_i$, and is surjective if and only if the ideals are pairwise coprime, that is:

$\forall i \ne j: I_i + I_j = A$
Hence in that case, it induces an ring isomorphism:

$A / I \to A / I_1 \times \cdots \times A / I_n$
through the First Isomorphism Theorem.


This page has been identified as a candidate for refactoring of medium complexity.In particular: Better if this could be written so that the statement of the theorem contains a statement of the result only. All other extra expositionary material really needs to be in the proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Proof 1
The mapping $\phi$ is indeed a ring homomorphism, because each canonical projection $\phi_i: A \to A / I_i$ is a ring homomorphism.
The kernel of $\phi$ is given by:

$\ds \ker \phi = \set {x \in A: \forall i, 1 \le i \le n : x \in I_i} = \bigcap_{1 \mathop \le i \mathop \le n} I_i =: I$
It remains then to be proved that $\phi$ is surjective if and only if the ideals are pairwise coprime.
Stated explicitly, we will show that the statement:

$\forall x_i \in A, 1 \le i \le n: \exists x \in A: x - x_i \in I_i, 1 \le i \le n$
holds if and only if: 

$\forall i \ne j: I_i + I_j = A$
To reach this goal, we now define $e_i \in A / I_1 \times \cdots \times A / I_n$ so that a unity lies at the $i$th coordinate:

$e_i := \tuple {0, \ldots, 0, 1_{A / I_i}, 0, \ldots, 0}$


Necessary Condition
We will start by showing the condition is necessary for surjectivity.
So suppose $\phi$ is surjective.
Then in particular, for each $i$, there is $a_i \in A$ such that $\map \phi {a_i} = e_i$.
Clearly, $\map {\phi_j} {a_i} = 0$ for $j \ne i$ while $\map {\phi_i} {1 - a_i} = \map {\phi_i} 1 - \map {\phi_i} {a_i} = 1 - 1 = 0$.
Hence for all $i \ne j$, we find:

$1 = a_i + \paren {1 - a_i} \in I_j + I_i$
Since Sum of Ideals is Ideal, we can conclude $r \cdot 1 \in I_j + I_i$ for all $r \in R$.
This completes the proof that $I_i + I_j = R$.
$\Box$


Sufficient Condition
We will now show the converse that the ideals being coprime is sufficient. 
Note that each $x \in A / I_1 \times \cdots \times A / I_n$ may then be written as:

$x = \tuple {x_1 + I_1, \ldots, x_n + I_n} = \paren {x_1 + I_1} e_1 + \cdots + \paren {x_n + I_n} e_n$
for some choice of $x_i \in A$.
This implies that it is enough to find $a_i \in A, 1 \le i \le n$, such that:

$\map \phi {a_i} = e_i$
because then:














\(\ds \map \phi {x_1 a_1 + \cdots + x_n a_n}\)

\(=\)







\(\ds \map \phi {x_1} \map \phi {a_1} + \cdots + \map \phi {x_n} \map \phi {a_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\map \phi {x_1}, \ldots, \map \phi {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 + I_1, \ldots, x_n + I_n}\)




















\(\ds \)

\(=\)







\(\ds x\)









To construct the $a_i \in A$, we need that $a_i - 1 \in I_i$, but $a_i \in I_j$ for all $j \ne i$.
Since $I_i$ is coprime with the other ideals, we have that:

$I_i + I_j = A, i \ne j$
In particular there exist $u_{i j} \in I_i$, $v_{i j} \in I_j$ for each pair $\tuple {i, j}$ with $i \ne j$ such that $u_{i j} + v_{i j} = 1$.
Define now $\ds a_i = \prod_{k \mathop \ne i} v_{i k}$. 
Then for $k \ne i$:

$a_i = v_{i k} \tuple {v_{i 1} \cdots v_{i \paren {k - 1} } v_{i \paren {k + 1} } \cdots v_{i n} } \in I_k$
and:














\(\ds \map {\phi_i} {a_i}\)

\(=\)







\(\ds \map {\phi_i} {\prod_{k \mathop \ne i} v_{i k} }\)




















\(\ds \)

\(=\)







\(\ds \map {\phi_i} {\prod_{k \mathop \ne i} \paren {1 - u_{i k} } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop \ne i} \map {\phi_i} {1 - u_{i k} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop \ne i} \paren {1 - \map {\phi_i} {u_{i k} } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop \ne i} 1\)




















\(\ds \)

\(=\)







\(\ds 1\)









Hence:

$a_i - 1 \in I_i$
which verifies that $\map \phi {a_i} = e_i$.
This concludes the proof of the sufficiency.
$\Box$

Now to conclude, let $\phi$ be surjective again.
Let $\tilde \phi$ be the injective homomorphism obtained by the First Isomorphism Theorem:

$\map {\tilde \phi} {x + I} = \tuple {x_1 + I_1, \ldots, x_n + I_n}$
for all $x \in A$.
It immediately follows that $\tilde \phi$ is also surjective, and hence constitutes an isomorphism.
$\blacksquare$


Proof 2
Consider $\pi$ only as a homomorphism of groups.
Then Chinese Remainder Theorem (Groups) is applicable as Subgroup of Abelian Group is Normal. 
It remains to demonstrate that the condition $I_i + I_j = R$ for all $i \ne j$ assumed here is equivalent to:

$\ds \forall k \le n - 1: I_{k + 1} + \bigcap_{i \mathop = 1}^k I_i = R$
The implication from the latter condition is immediate.
For the converse, let $i$ be arbitrary.
The result follows from:














\(\ds R\)

\(=\)







\(\ds \prod_{j \mathop \ne i} \paren {I_i + I_j}\)





$R$ has a unit and $I_i + I_j = R$ for $j \ne i$














\(\ds \)

\(\subseteq\)







\(\ds I_i + \prod_{j \mathop \ne i} I_j\)





Ring Axiom $\text D$: Distributivity of Product over Addition, Definition of Ideal of Ring














\(\ds \)

\(\subseteq\)







\(\ds I_i + \bigcap_{j \mathop \ne i}^n I_j\)





Intersection of Ideals of Ring contains Product



$\blacksquare$


Also see
Chinese Remainder Theorem (Groups), of which this is a special case
Product of Coprime Ideals equals Intersection, which is sometimes cited as part of the Chinese Remainder Theorem


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Establish exactly which, if either, proof is documented in these sourcesIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1990: Kenneth Ireland and Michael Rosen: A Classical Introduction to Modern Number Theory (2nd ed.): Chapter $12$ Algebraic Number Theory: $\S 3$ Ramification and Degree: Proposition $12.3.1$
2005: Serge Lang: Undergraduate Algebra (3rd ed.): Chapter $\text {III}$, $\S 3$ Exercises: Problem $7$
2012: Ambar N. Sengupta: Representing Finite Groups: A Semisimple Introduction: Proposition $12.4.1$




