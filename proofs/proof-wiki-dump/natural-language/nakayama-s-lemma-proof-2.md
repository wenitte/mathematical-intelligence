# 

Source: https://proofwiki.org/wiki/Nakayama%27s_Lemma/Proof_2

Theorem
Let $A$ be a commutative ring with unity.
Let $M$ be a finitely generated $A$-module. 
Let $\map {\operatorname{Jac} } A$ be the Jacobson radical of $A$.
Let $\mathfrak a \subseteq \map {\operatorname{Jac} } A$ be an ideal of $A$.
Suppose $\mathfrak a M = M$.

Then:

$M = 0$


Proof
Let $\phi : M \to M$ be the identity mapping on $M$, i.e.:

$\forall x \in M : \map \phi x = x$
Since $\mathfrak a M = M$ by hypothesis, $\phi$ is an endomorphism of $M$ such that:

$\map \phi M \subseteq a M$
By Cayley-Hamilton Theorem, there exist $a_0, \ldots , a_{n-1} \in \mathfrak a$ such that:

$(1):\quad \phi^n + a_{n - 1} \phi^{n-1} + \cdots + a_1 \phi + a_0 = 0$
Evaluating $(1)$ at $x=1$, especially, we have:

$(2):\quad 1 + a= 0$
where:

$a := a_{n - 1} + \cdots + a_1 + a_0$
Since:

$a \in \mathfrak a \subseteq \map {\operatorname {Jac} } A$
by Characterisation of Jacobson Radical, $1 + a$ is a unit in $A$.
Thus for each $x \in M$, we have:














\(\ds x\)

\(=\)







\(\ds \paren {1 + a}^{-1} \paren {1 + a} x\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + a}^{-1} 0\)





by $(2)$














\(\ds \)

\(=\)







\(\ds 0\)









That is:

$M = 0$
$\blacksquare$





