# 

Source: https://proofwiki.org/wiki/Rational_Numbers_with_Denominators_Coprime_to_Prime_under_Addition_form_Group



Theorem
Let $p$ be a prime number.
Let $\Q_p$ denote the set:

$\set {\dfrac r s : s \perp p}$
where $s \perp p$ denotes that $s$ is coprime to $p$.

Then $\struct {\Q_p, +}$ is a group.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: For a neater proof, suggest the One-Step Subgroup Test or Two-Step Subgroup Test be used.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Taking each of the group axioms in turn:


Group Axiom $\text G 0$: Closure

Work In ProgressIn particular: It is very likely that there are a small set of pages already on here that would make this into a one or two line subproof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
$\Box$


Group Axiom $\text G 1$: Associativity
As $\Q_p \subseteq \Q$ the result follows directly from Rational Addition is Associative and Restriction of Associative Operation is Associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
By Integer is Coprime to 1:

$\dfrac 0 1 \in \Q_p$
regardless of our choice of $p$.

By the definition of addition on $\Q$:

$\dfrac a b + \dfrac 0 1 = \dfrac a b$
and

$\dfrac 0 1 + \dfrac a b = \dfrac a b$
for all $\dfrac a b \in \Q$.

Hence $\dfrac 0 1$ is the identity.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
For $\dfrac a b$ we have that $\dfrac {-a} b$ is the inverse of $\dfrac a b$.
As it has the same denominator as $\dfrac a b$ we have that $\dfrac {-a} b \in \Q_p$ as well.
$\blacksquare$


Sources
1974: Thomas W. Hungerford: Algebra




