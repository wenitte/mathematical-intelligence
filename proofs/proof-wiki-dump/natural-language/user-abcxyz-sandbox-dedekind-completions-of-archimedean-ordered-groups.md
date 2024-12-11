# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Dedekind_Completions_of_Archimedean_Ordered_Groups

Yes, I know to put singular nouns in the theorem title when this is put up. (The title of this page refers to its subject.) It's just that I haven't spent the time to come up with (or discuss) a suitable name for this theorem. Just be patient; I'll get to the matter in due course. --abcxyz (talk) 17:45, 20 January 2013 (UTC)



This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Definition:Archimedean Ordered Group
An ordered group $\left({G, *, \preceq}\right)$ is said to be Archimedean if and only if:

$\forall g \in G: \left({\exists h \in G: \forall n \in \N: g^n \preceq h}\right) \implies g \preceq e$
where:

$e$ denotes the identity element of $\left({G, *}\right)$
$g^n$ denotes the $n$th power of $g$ in $\left({G, *}\right)$

In other words, if $g \in G$, $g \npreceq e$, then $\left\{{g^n: n \in \N}\right\}$ is unbounded above in $\left({G, \preceq}\right)$.


Theorem
Let $\left({G, *, \le}\right)$ be an Archimedean ordered group.
Let $\bigl({\bigl({\tilde G, \preceq}\bigr), \phi}\bigr)$ be a Dedekind completion of $\left({G, \le}\right)$.

Then there exists a unique binary operation $\circledast$ on $\tilde G$ such that:

$({1}): \quad \bigl({\tilde G, \circledast, \preceq}\bigr)$ is an ordered group
$({2}): \quad \phi$ is a group homomorphism from $\left({G, *}\right)$ to $\bigl({\tilde G, \circledast}\bigr)$


Proof
Proof of Existence
Let $\circledast: \tilde G \times \tilde G \to \tilde G$ be the binary operation on $\tilde G$ defined as:

$\forall x, y \in \tilde G: x \circledast y = \sup {\left\{{\phi \left({g * h}\right): \phi \left({g}\right) \preceq x, \, \phi \left({h}\right) \preceq y}\right\}}$


Existence of $x \circledast y$ in $\tilde G$
Let $x, y \in \tilde G$.
By the definition of the Dedekind completion, the set:

$S = \left\{{\phi \left({g * h}\right): \phi \left({g}\right) \preceq x, \, \phi \left({h}\right) \preceq y}\right\}$
is non-empty.
Because $\bigl({\tilde G, \preceq}\bigr)$ is Dedekind complete, it suffices to show that $S$ is bounded above in $\tilde G$.

By the definition of the Dedekind completion, there exist $a, b \in G$ such that $x \preceq \phi \left({a}\right)$ and $y \preceq \phi \left({b}\right)$.
Suppose that $g, h \in G$, $\phi \left({g}\right) \preceq x$, $\phi \left({h}\right) \preceq y$.
Then, because $\phi$ is an order embedding, we have that $g \le a$ and $h \le b$.
It follows that:

$\phi \left({g * h}\right) \preceq \phi \left({a * h}\right) \preceq \phi \left({a * b}\right)$
Hence, $S$ is bounded above in $\tilde G$.
$\Box$


$\preceq$ is Compatible with $\circledast$
Let $x, x', y \in \tilde G$, $x \preceq x'$.
Then:

$\left\{{\phi \left({g * h}\right): \phi \left({g}\right) \preceq x, \, \phi \left({h}\right) \preceq y}\right\} \subseteq \left\{{\phi \left({g * h}\right): \phi \left({g}\right) \preceq x', \, \phi \left({h}\right) \preceq y}\right\}$
From Supremum of Subset Product in Ordered Group, it follows that:

$x \circledast y \preceq x' \circledast y$
Similarly:

$y \circledast x \preceq y \circledast x'$
That is, $\preceq$ is compatible with $\circledast$.
$\Box$


$\phi$ is a Homomorphism from $\left({G, *}\right)$ to $\bigl({\tilde G, \circledast}\bigr)$
Let $g_0, h_0 \in G$.
It follows directly from the definition of the supremum that:

$\phi \left({g_0 * h_0}\right) \preceq \phi \left({g_0}\right) \circledast \phi \left({h_0}\right)$
If $g, h \in G$, $\phi \left({g}\right) \preceq \phi \left({g_0}\right)$, $\phi \left({h}\right) \preceq \phi \left({h_0}\right)$, then, because $\phi$ is an order embedding, it follows that:

$g \le g_0$ and $h \le h_0$
By Operating on Ordered Group Inequalities:

$g * h \le g_0 * h_0$
Then since $\phi$ is an order embedding:

$\phi \left({g * h}\right) \preceq \phi \left({g_0 * h_0}\right)$
By the definition of the supremum, it follows that:

$\phi \left({g_0}\right) \circledast \phi \left({h_0}\right) \preceq \phi \left({g_0 * h_0}\right)$
Since $\preceq$ is antisymmetric:

$\phi \left({g_0 * h_0}\right) = \phi \left({g_0}\right) \circledast \phi \left({h_0}\right)$

Hence, $\phi$ is a homomorphism from $\left({G, *}\right)$ to $\bigl({\tilde G, \circledast}\bigr)$.
$\Box$

We now verify the group axioms for $\bigl({\tilde G, \circledast}\bigr)$.


Group Axiom $\text G 1$: Associativity
Let $x, y, z \in \tilde G$, and define:

$A = \left\{{\phi \left({a * b * c}\right): a, b, c \in G, \, \phi \left({a}\right) \preceq x, \, \phi \left({b}\right) \preceq y, \, \phi \left({c}\right) \preceq z}\right\}$
It suffices to show that:

$\left({x \circledast y}\right) \circledast z = \sup A = x \circledast \left({y \circledast z}\right)$
We only prove the first equality; the second follows similarly.

If $a, b, c \in G$, $\phi \left({a}\right) \preceq x$, $\phi \left({b}\right) \preceq y$, $\phi \left({c}\right) \preceq z$, then:

$\phi \left({a * b * c}\right) = \phi \left({a * b}\right) \circledast \phi \left({c}\right) \preceq \left({x \circledast y}\right) \circledast \phi \left({c}\right)$
It follows that $\sup A \preceq \left({x \circledast y}\right) \circledast z$.

We now show that $\sup A \succeq \left({x \circledast y}\right) \circledast z$.
By the definition of the Dedekind completion, we have that:

$\sup A = \inf {\left\{{\phi \left({g}\right): \phi \left({g}\right) \succeq \sup A}\right\}}$
Suppose that $g \in G$, $\phi \left({g}\right) \succeq \sup A$.
It suffices to show that $\phi \left({g}\right) \succeq \left({x \circledast y}\right) \circledast z$.
Suppose that $a, b, c \in G$, $\phi \left({a}\right) \preceq x$, $\phi \left({b}\right) \preceq y$, $\phi \left({c}\right) \preceq z$.
Then:

$\phi \left({a * b}\right) = \phi \left({a * b * c}\right) \circledast \phi \bigl({c^{-1}}\bigr) \preceq \phi \left({g}\right) \circledast \phi \bigl({c^{-1}}\bigr) = \phi \bigl({g * c^{-1}}\bigr)$
where $c^{-1}$ denotes the inverse of $c$ in $\left({G, *}\right)$.
By the definition of $\circledast$, it follows that:

$x \circledast y \preceq \phi \bigl({g * c^{-1}}\bigr)$
Therefore:

$\left({x \circledast y}\right) \circledast \phi \left({c}\right) \preceq \phi \bigl({g * c^{-1}}\bigr) \circledast \phi \left({c}\right) = \phi \left({g}\right)$
Hence:

$\left({x \circledast y}\right) \circledast z \preceq \phi \left({g}\right)$
It follows that $\circledast$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $e$ denote the identity of $\left({G, *}\right)$.
Let $x \in \tilde G$.
By the definition of the Dedekind completion, we have that:

$x = \sup {\left\{{\phi \left({g}\right): \phi \left({g}\right) \preceq x}\right\}}$
It follows that:

$x \circledast \phi \left({e}\right) = x = \phi \left({e}\right) \circledast x$
Therefore, $\phi \left({e}\right)$ is the identity of $\bigl({\tilde G, \circledast}\bigr)$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $x \in \tilde G$, and define:

$y = \inf {\left\{{\phi \bigl({g^{-1}}\bigr): \phi \left({g}\right) \preceq x}\right\}}$
where $g^{-1}$ denotes the inverse of $g$ in $\left({G, *}\right)$.
By the definition of the Dedekind completion, it follows that the set:

$\left\{{\phi \bigl({g^{-1}}\bigr): \phi \left({g}\right) \preceq x}\right\}$
is non-empty and bounded below.
Therefore, by Dedekind Completeness is Self-Dual, $y \in \tilde G$.

We show that $y$ is the inverse of $x$ in $\bigl({\tilde G, \circledast}\bigr)$.
We only prove that $x \circledast y = \phi \left({e}\right)$; the equation $y \circledast x = \phi \left({e}\right)$ follows similarly.
For any $g, h \in G$ such that $\phi \left({g}\right) \preceq x$ and $\phi \left({h}\right) \preceq y$, we have that:

$\phi \left({g * h}\right) \preceq \phi \left({g}\right) \circledast y \preceq \phi \left({g}\right) \circledast \phi \bigl({g^{-1}}\bigr) = \phi \left({e}\right)$
It follows that $x \circledast y \preceq \phi \left({e}\right)$.

We now show that $x \circledast y \succeq \phi \left({e}\right)$.
By the definition of the Dedekind completion, we have:

$x \circledast y = \inf {\left\{{\phi \left({p}\right): \phi \left({p}\right) \succeq x \circledast y}\right\}}$
Suppose that $p \in G$, $\phi \left({p}\right) \succeq x \circledast y$.
It suffices to show that $p \ge e$.
If $k \in G$, $\phi \left({k}\right) \succeq x$, then:

$\forall g \in G: \phi \left({g}\right) \preceq x \implies \phi \bigl({k^{-1}}\bigr) \preceq \phi \bigl({g^{-1}}\bigr)$
Therefore, $\phi \bigl({k^{-1}}\bigr) \preceq y$, and so:

$x \circledast \phi \bigl({k^{-1}}\bigr) \preceq x \circledast y \preceq \phi \left({p}\right)$
By the associativity of $\circledast$, it follows that $\phi \left({p * k}\right) \succeq x$.
By the definition of the Dedekind completion, we can choose $a, b \in G: \phi \left({a}\right) \preceq x \preceq \phi \left({b}\right)$.
Since the above holds for any $k \in G$ such that $\phi \left({k}\right) \succeq x$, it follows by mathematical induction that:

$\forall n \in \N: \phi \left({p^n * b}\right) \succeq x \succeq \phi \left({a}\right)$
Since $\phi$ is an order embedding and $\left({G, *, \le}\right)$ is an Archimedean ordered group, it follows that $p \ge e$.
It follows that $y$ is the inverse of $x$ in $\bigl({\tilde G, \circledast}\bigr)$.
$\Box$


Proof of Uniqueness
Let $\odot$ be a binary operation on $\tilde G$ such that:

$({1}): \quad \bigl({\tilde G, \odot, \preceq}\bigr)$ is an ordered group
$({2}): \quad \phi$ is a group homomorphism from $\left({G, *}\right)$ to $\bigl({\tilde G, \odot}\bigr)$
Then, for all $x, y \in \tilde G$, we have:














\(\ds x \odot y\)

\(=\)







\(\ds \sup { \left\{ {\phi \left({g}\right): \phi \left({g}\right) \preceq x} \right\} } \odot \sup { \left\{ {\phi \left({h}\right): \phi \left({h}\right) \preceq y} \right\} }\)





by the definition of the Dedekind completion














\(\ds \)

\(=\)







\(\ds \sup { \left\{ {\phi \left({g}\right) \odot \phi \left({h}\right): \phi \left({g}\right) \preceq x, \, \phi \left({h}\right) \preceq y} \right\} }\)





by Supremum of Subset Product in Ordered Group














\(\ds \)

\(=\)







\(\ds \sup { \left\{ {\phi \left({g * h}\right): \phi \left({g}\right) \preceq x, \, \phi \left({h}\right) \preceq y} \right\} }\)





because $\phi$ is a group homomorphism from $\left({G, *}\right)$ to $\bigl({\tilde G, \odot}\bigr)$



$\blacksquare$





