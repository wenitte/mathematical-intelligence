# 

Source: https://proofwiki.org/wiki/Cowen%27s_Theorem/Lemma_5



Lemma for Cowen's Theorem
Let $g$ be a progressing mapping.
Let $x$ be a set.
Let $\powerset x$ denote the power set of $x$.
Let $M_x$ denote the intersection of the $x$-special subsets of $\powerset x$ with respect to $g$.

Let $M$ be the class of all $x$ such that $x \in M_x$.
We have that:

$x \subseteq y \implies M_y \subseteq M_x \cup \paren {\powerset y \setminus \powerset x}$


Proof
Let us recall the definition of $x$-special with respect to $g$.

$S$ is $x$-special (with respect to $g$)
if and only if:




\((1)\)  

$:$  













$\O \in S$   

  


\((2)\)  

$:$  













$S$ is closed under $g$ relative to $x$   

  


\((3)\)  

$:$  













$S$ is closed under chain unions   

  


Let $x \subseteq y$.
Let $T = M_x \cup \paren {\powerset y \setminus \powerset x}$
First we show that $T$ is $y$-special with respect to $g$.

We take the criteria one by one:

$(1)
\quad \O \in T$
We have by definition that $\O \in S$ for all $x$-special $S$ with respect to $g$.
Hence $\O$ is an element of the intersection of all $x$-special sets with respect to $g$.
That is:

$\O \in M_x$
Hence:

$\O \in M_x \cup \paren {\powerset y \setminus \powerset x}$
$\Box$


$(2)
\quad T$ is closed under $g$ relative to $y$
Let $z \in T$ and $\map g z \subseteq y$.

We are to show that $\map g z \in T$.
Suppose $\map g z \notin \powerset x$.
Then because $\map g z \subseteq y$ it must follow that $\map g z \in \powerset y \setminus \powerset x$.
Suppose $\map g z \in \powerset x$.
That is:

$\map g z \subseteq x$
Because $g$ is progressing:

$z \in \map g z$
Hence:

$z \subseteq x$
and so:

$z \subseteq \powerset x$
Hence it is not the case that $z \in \powerset y \setminus \powerset x$.
But we have that $z \in T$.
So:

$z \in M_x$
But then because $\map g z \subseteq x$, we have:L

$\map g z \in M_x$
Hence:

$\map g z \in T$
Thus:

$\paren {z \in T \land \map g z \subseteq y} \implies \map g z \in T$
and so $T$ is closed under $g$ relative to $y$.
$\Box$


$(3)
\quad T$ is closed under chain unions
Suppose $C$ is a chain of elements of $T$.
We have that all elements of $M_x$ are subsets of $x$.
Hence by Subset Relation is Transitive, all elements of $M_x$ are subsets of $y$.
Also, by definition of power set, all elements of $\powerset y \setminus \powerset x$ are also subsets of $y$.
Hence all elements of $T$ are subsets of $y$.

Because all elements of $C$ are subsets of $y$:

$\ds \bigcup C \subseteq y$
Hence:

$\ds \bigcup C \in \powerset y$

Suppose $\ds \bigcup C \notin \powerset x$.
Then:

$\ds \bigcup C \in \powerset y \setminus \powerset x$
Hence:

$\ds \bigcup C \in T$

Suppose $\ds \bigcup C \in \powerset x$.
Then:

$\forall z \in C: z \subseteq \ds \bigcup C \subseteq x$
and so:

$z \subseteq x$
Then:

$z \notin \powerset y \setminus \powerset x$
and so:

$z \in M_x$
So:

$\ds \bigcup C \in \powerset x \implies C \subseteq M_x$
and so:

$\ds \bigcup C \in M_x$
and it follows that:

$\ds \bigcup C \in T$
Thus, by Proof by Cases:

$\ds \bigcup C \in T$
That is, $T$ is closed under chain unions.
$\Box$

We have demonstrated that $T$ is $y$-special with respect to $g$.

We have that every element of $M_x$ is a subset of $x$.
Hence every element of $M_x$ is a subset of $y$.
Also:

$\powerset y \setminus \powerset x \subseteq \powerset y$
and it follows that:

$T \subseteq \powerset y$
Hence it follows that:

$M_y \subseteq T$
and the result follows.
$\blacksquare$


Source of Name
This entry was named for Robert H. Cowen.


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {III}$ -- The existence of minimally superinductive classes: $\S 7$ Cowen's theorem: Lemma $7.8$ (Main lemma)




