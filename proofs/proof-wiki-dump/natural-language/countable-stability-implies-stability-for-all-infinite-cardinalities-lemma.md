# 

Source: https://proofwiki.org/wiki/Countable_Stability_implies_Stability_for_All_Infinite_Cardinalities/Lemma


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Countable Stability implies Stability for All Infinite Cardinalities
Let $T$ be a complete $\LL$-theory whose language $\LL$ is countable.
Let $\kappa$ be an infinite cardinal.
Let there exists some $\MM \models T$ and $A \subseteq \MM$ with $\card A = \kappa$ such that:

$\card {\map { {S_n}^\MM} A} > \kappa$

Let $\LL_A$ denote $\LL \cup \set {a: a \in A}$, the language obtained from $\LL$ by adding new constant symbols for each $a \in A$.

For each $\LL_A$-formula $\phi$, let $\sqbrk \phi = \set {p \in \map { {S_n}^\MM} A: \phi \in p}$, the set of complete $n$-types over $A$ which contain $\phi$.

Suppose $\card {\sqbrk \phi} > \kappa$.
We argue that we can select some $\LL_A$-formula $\psi$ such that both:

$\card {\sqbrk {\phi \land \psi} } > \kappa$
and:

$\card {\sqbrk {\phi \land \neg \psi} } > \kappa$


Proof
The argument is a Proof by Contradiction.

Aiming for a contradiction, suppose the proposition is not true.
Let $p$ be the subset:

$\set {\psi: \card {\sqbrk {\phi \land \psi} } > \kappa}$
where each $\psi$ is an $\LL_A$-formula in $n$ free variables.
We will eventually write $\sqbrk \phi$ as a union of $\set p$ and other sets which are "too small", so that we contradict the cardinality of $\sqbrk \phi$.
In order to do this, we first need to show that $p$ is a type.

First, note that if both $\card {\sqbrk {\phi \land \neg \psi} } \le \kappa$ and $\card {\sqbrk {\phi \land \neg \psi} } \le \kappa$, then $\card {\sqbrk \phi} \le \kappa$, which is not the case.


This article, or a section of it, needs explaining.In particular: The above makes no sense -- both expressions being anded are the same. Presumably one of these should be $\card {\sqbrk {\phi \land \psi} } > \kappa$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, for each $\psi$, either $\psi \in p$ or $\neg \psi \in p$.
Next, note that by assumption, it cannot be the case that both $\psi$ and $\neg \psi$ in $p$.

Let $\Delta = \set {\psi_1, \ldots, \psi_m} \cup \Delta'$ be a finite subset of $p \cup \map {\operatorname {Th}_A} \MM$, where $\Delta$ is written so that any sentences from $\map {\operatorname {Th}_A} \MM$ are in $\Delta'$.

Suppose $\psi_1 \land \cdots \land \psi_m$ is not in $p$.
Then by the above comment, $\neg \paren {\psi_1 \land \cdots \land \psi_m}$ is in $p$.
But this means that:














\(\ds \card {\sqbrk {\phi \land \neg \paren {\psi_1 \land \cdots \land \psi_m} } }\)

\(=\)







\(\ds \card {\sqbrk {\paren {\phi \land \neg \psi_1} \lor \cdots \lor \paren {\phi \land \neg \psi_m} } }\)





De Morgan's Laws (Logic)














\(\ds \)

\(=\)







\(\ds \card {\sqbrk {\phi \land \neg \psi_1} \cup \cdots \cup \sqbrk {\phi \land \neg \psi_m} }\)




















\(\ds \)

\(>\)







\(\ds \kappa\)










Thus, by Cardinality of Infinite Union of Infinite Sets, at least one of the $\psi_i$ must satisfy $\card {\sqbrk {\phi \land \neg \psi_i} } > \kappa$.
This is impossible, since $\psi_i \in p$.
So, $\psi_1 \land \cdots \land \psi_m$ is in $p$.
By definition of $p$ this means:

$\card {\sqbrk {\phi \land \psi_1 \land \cdots \land \psi_m} } > \kappa$
Hence there are types containing $\psi_1 \land \cdots \land \psi_m$.

So $\Delta$ is satisfiable.

By the Compactness Theorem, this means that $p \cup \map {\operatorname {Th}_A} \MM$ is satisfiable.
Hence:

$p \in \map { {S_n}^\MM} A$

We have that $p$ is a type.
So we can write:

$\sqbrk \phi = \set p \cup \bigcup_{\psi \notin p} \sqbrk {\phi \land \psi}$
since every type besides $p$ which contains $\phi$ must contain some $\psi \notin p$.

Note the cardinalities involved in this union:
Clearly, $\set p$ has cardinality $1 < \kappa$.
By definition of $p$ each $\sqbrk {\phi \land \psi}$ for $\psi \notin p$ has cardinality at most $\kappa$.
We have noted earlier in the main proof that there are only $\kappa$-many $\LL_A$-formulas.

Thus, by Cardinality of Infinite Union of Infinite Sets, it is to be concluded that:

$\card {\sqbrk \phi} \le \kappa$
However, this contradicts our supposition.
The lemma follows by Proof by Contradiction.
$\blacksquare$





