# 

Source: https://proofwiki.org/wiki/Elementary_Amalgamation_Theorem

Theorem
Let $\MM$ and $\NN$ be $\LL$-structures.
Let $B$ be a subset of the universe of $\MM$ such that there is a partial elementary embedding $f: B \to \NN$.

There is an elementary extension $\AA$ of $\MM$ and an elementary embedding $g: \NN \to \AA$ such that $\map g {\map f b} = b$ for all $b \in B$.

$\array {
& & \AA& & \\
&\preceq & & \nwarrow \exists g: & & \!\!\!\!\!\!\!\!\!\!\!\!\!: g \circ f = \operatorname {id}_B \\
\MM & & & &\!\!\!\!\!\!\!\! \NN \\
& \supseteq & & \nearrow f \\
& & B& & \\
}$


Proof
The proof is essentially a straightforward application of the Compactness Theorem on the collection of sentences with parameters true in each of $\MM$ and $\NN$, but it requires some tedious set-up in handling symbols of the language involved to make sure that we get the map $g$ with the properties we want in the end.

First, we will define some new languages by adding constants for all of the elements in the structures involved.
This well help us construct the claimed $\AA$.
This first part of the proof is essentially just setting the stage for our argument, there is little to verify.

Let $C_\MM = \set {c_m : m \in \MM}$ be set of new constant symbols (not appearing in $\LL$) corresponding to each element of the universe of $\MM$.
Similarly, let $C'_\NN = \set {c_n: n \in \NN}$ be new constant symbols (not appearing in $\LL$ or $C_\MM$) corresponding to elements of the universe of $\NN$.
It will be beneficial to use the same constant symbols for both the elements of $B$ and their images in $f \sqbrk B \subseteq \NN$, so we will define:

$C_\NN = \paren {C'_\NN - \set {c_{\map f b}: b \in B} } \cup \set {c_b : b \in B}$

Let $\LL_\MM$ be the language obtained from $\LL$ by adding the constant symbols in $C_\MM$
Let $\LL_\NN$ be that obtained from $\LL$ by adding the constants in $C_\NN$.
Note that $\LL_\MM$ and $\LL_\MM$ share the constant symbols $c_b$ for $b\in B$, and those constant symbols which already appear in $\LL$, but all of their other constant symbols are distinct.

We will view $\MM$ as an $\LL_\MM$-structure by interpreting each constant $c_m$ as $m$.
Similarly, we will view $\NN$ as an $\LL_\NN$-structure by interpreting each $c_n$ for $n\in \NN - f \sqbrk B$ as $n$, and each $c_b$ for $b \in B$ as $\map f b$.

Let $\LL_{\MM \NN}$ be the language obtained from $\LL$ by adding the constant symbols in $C_\MM \cup C_\NN$

Let $\map {\mathrm {eldiag} } \MM$ be the set of $\LL_\MM$-sentences which are satisfied by $\MM$.
Similarly, let $\map {\mathrm {eldiag} } \NN$ be the set of $\LL_\NN$-sentences which are satisfied by $\NN$.
(We are using this notation since these are essentially elementary diagrams, the only difference is that we have made some more specific decisions about the constants involved.)

Let $T$ be the $\LL_{\MM \NN}$-theory $\map {\mathrm {eldiag} } \MM \cup \map {\mathrm {eldiag} } \NN$.

Now that we have all of these definitions, we will show that $T$ is satisfiable.
This will give us a model which we can use to obtain the one claimed by the theorem.  It will suffice to show that all finite subsets of $T$ are satisfiable, since we may then apply the Compactness Theorem.

Let $\Delta$ be a finite subset of $T$.

$\Delta$ is then a finite subset of $\map {\mathrm {eldiag} } \MM$, together with finitely many $\LL_\NN$-sentences from $\map {\mathrm {eldiag} } \MM$ whose conjunction we will write as $\phi(\bar c_b, \bar c_n)$, where $\phi(\bar x, \bar y)$ is an $\LL$-formula, $\bar b$ is a ordered tuple from $B$, and $\bar n$ is a tuple of mutually distinct elements from $\NN$ not containing elements of $f(B)$.
Suppose $\Delta$ has no model.
In particular, every $\LL_{\MM \NN}$-model of $\map {\mathrm {eldiag} } \MM$ must fail to be model of $\Delta$.
Hence we have $\map {\mathrm {eldiag} } \MM \models \neg \map \phi {\bar c_b, \bar c_n}$.
But, since the constants in $\bar c_n$ are distinct from all of the constants corresponding to elements of $B$ and $\MM$ in general, it doesn't matter how a $\LL_{\MM \NN}$-model of $\map {\mathrm {eldiag} } \MM$ interprets $\bar c_n$:
$\map {\mathrm {eldiag} } \MM \models \forall \bar y \neg \map \phi {\bar c_b, \bar y}$.
Since $\MM \models \map {\mathrm {eldiag} } \MM$, we obtain:
$\MM \models \forall \bar y \neg \map \phi {\bar c_b, \bar y}$, and hence
$\MM \models \forall \bar y \neg \map \phi {\bar b, \bar y}$ since $\MM$ interprets each $c_b$ as $b$.
Since $f$ is partial elementary on $B$, we get:
$\NN \models \forall \bar y \neg \map \phi {\map f {\bar b}, \bar y}$.
But, this contradicts the choice of $\map \phi {\bar c_b, \bar c_n}$ as being a conjunction of sentences in $\map {\mathrm {eldiag} } \NN$, since $\NN$ interprets each $c_b$ as its corresponding element $\map f b$.
Thus, $\Delta$ has a model.

Hence, by the Compactness Theorem, $T$ is satisfiable.

Now, let $\AA^*$ be a model of $T$, and let $\AA$ be the $\LL$-structure obtained by removing all of the interpretations of constants in $C_\MM \cup C_\NN$ from $\AA^*$.

Since $\AA^* \models \map {\mathrm {eldiag} } \MM$, we can, after possibly creating an isomorphic copy of $\AA^*$ with new distinct elements, and replacing each element $a$ of the universe of $\AA^*$ such that $c_m^{\AA^*} = a$ with the element $m \in \MM$, view $\AA$ as an elementary extension of $\MM$ such that $c_m^\AA = m \in \AA$.

Define $g : \NN \to \AA$ by $\map g n = c_n^{\AA^*}$, where $c_n$ is the constant symbol in $C_\NN$ which $\NN$ interprets as $n$.
Since $\AA^* \models \map {\mathrm {eldiag} } \NN$, we have that $g$ is elementary.

Let $b \in B$
Recall that $\NN$ interprets $c_b$ as $\map f b$, and since $b \in B\subseteq \MM$, we have $c_b^{\AA^*} = b$.
Thus:

$\map g {\map f b} = c_b^{\AA^*}$ = b

So, $\AA$ and $g$ are as claimed by the theorem.
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




