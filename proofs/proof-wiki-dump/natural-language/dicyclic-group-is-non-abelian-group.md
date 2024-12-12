# 

Source: https://proofwiki.org/wiki/Dicyclic_Group_is_Non-Abelian_Group



Theorem
The dicyclic group $\Dic n$ is a non-abelian group on two generators.


Corollary
The quaternion group $Q_4$ is a non-abelian group.


Proof
The dicyclic group $\Dic n$ is defined as follows:
For even $n$, the dicyclic group $\Dic n$ of order $4 n$ is the group having the presentation:

$\Dic n = \gen {a, b: a^{2 n} = e, b^2 = a^n, b^{-1} a b = a^{-1} }$

First it is to be demonstrated that $\Dic n$ is a group.
First we deduce the following:
$(1): \quad b^4 = e$:














\(\ds b^2\)

\(=\)







\(\ds a^n\)





Definition of Dicyclic Group








\(\ds \leadsto \ \ \)





\(\ds \paren {b^2}^2\)

\(=\)







\(\ds \paren {a^n}^2\)














\(\ds \leadsto \ \ \)





\(\ds b^4\)

\(=\)







\(\ds a^{2 n}\)




















\(\ds \)

\(=\)







\(\ds e\)





Definition of Dicyclic Group




$(2): \quad b^2 a^k = a^{k + n} = a^k b^2$:














\(\ds b^2 a^k\)

\(=\)







\(\ds b^2 a^{2 n} a^k\)





Definition of Dicyclic Group: $a^{2 n} = e$














\(\ds \)

\(=\)







\(\ds b^2 \paren {b^2 a^n} a^k\)





Definition of Dicyclic Group: $b^2 = a^n$














\(\ds \)

\(=\)







\(\ds b^4 a^{n + k}\)




















\(\ds \)

\(=\)







\(\ds a^{k + n}\)





Definition of Dicyclic Group: $b^4 = e$














\(\ds \)

\(=\)







\(\ds a^k a^n b^4\)





Definition of Dicyclic Group: $b^4 = e$














\(\ds \)

\(=\)







\(\ds a^k \paren {a^n b^2} b^2\)




















\(\ds \)

\(=\)







\(\ds a^k \paren {a^n a^n} b^2\)





Definition of Dicyclic Group: $b^2 = a^n$














\(\ds \)

\(=\)







\(\ds a^k \paren {a^{2 n} } b^2\)




















\(\ds \)

\(=\)







\(\ds a^k b^2\)





Definition of Dicyclic Group: $a^{2 n} = e$




$(3): \quad j = \pm 1 \implies b^j a^k = a^{-k} b^j$





\(\text {(4)}: \quad\)









\(\ds a^k b^{-1}\)

\(=\)







\(\ds a^{k - n} a^n b^{-1}\)




















\(\ds \)

\(=\)







\(\ds a^{k - n} b^2 b^{-1}\)




















\(\ds \)

\(=\)







\(\ds a^{k - n} b\)










Thus, every element of $\Dic n$ can be uniquely written as $a^k b^j$, where $0 \le k < 2 n$ and $j \in \set {0, 1}$. 

The definition of the group product gives:

$a^k a^m = a^{k + m}$
$a^k a^m b = a^{k + m} b$
$a^k b a^m = a^{k - m} b$
$a^k b a^m x = a^{k - m + n}$

Taking the group axioms in turn:


This needs considerable tedious hard slog to complete it.In particular: In my naivety with the below, I am at the moment unaware of the concept of a group presentation being a concept defined from a free group, with the assumption that being a quotient group, a lot of the properties (e.g. associativity, identity) are inherited from the Group Presentation itself. But I need to understand this. So far the only help I've been given is that this area is all "trivial" and "obvious".To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Group Axiom $\text G 0$: Closure
Let $x, y \in \Dic n$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $\Dic n$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $\Dic n$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $e$ is the identity element of $\Dic n$.

$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $e$ is the identity element of $\Dic n$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus every element $...$ of $\Dic n$ has an inverse $...$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $...$ is a group.


Generators
The generator of $\Dic n$ is seen to be $\set {a, b}$.
$\blacksquare$



This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




