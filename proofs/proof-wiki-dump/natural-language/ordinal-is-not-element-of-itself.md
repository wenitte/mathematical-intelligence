# 

Source: https://proofwiki.org/wiki/Ordinal_is_not_Element_of_Itself



Theorem
Let $x$ be an ordinal.
Then:

$x \notin x$


Proof 1
By Successor Set of Ordinal is Ordinal, the successor of $x$ is an ordinal.
That is, $x^+ = x \cup \set x$ is an ordinal.
By Set is Element of Successor, $x \in x^+$.
Because $x^+$ is an ordinal, it is strictly well-ordered by the epsilon restriction $\Epsilon {\restriction_{x^+} }$.

Because a strict ordering is antireflexive and $x \in x^+$, we conclude that $x \notin x$.
$\blacksquare$


Proof 2
This result follows immediately from Set is Not Element of Itself.
$\blacksquare$


Proof 3
Let $\On$ denote the class of all ordinals.
From Class of All Ordinals is Minimally Superinductive over Successor Mapping, $\On$ is superinductive.
Hence we can use the Principle of Superinduction.

By Zero is Smallest Ordinal, $0$ is the smallest element of $\On$.
We identify the natural number $0$ via the von Neumann construction of the natural numbers as:

$0 := \O$
From Empty Set is Ordinary:

$\O \notin \O$
and so:

$0 \notin 0$
$\Box$

Let $x$ be an ordinal for which it has been established that:

$x \notin x$
Then by Successor Set of Ordinary Transitive Set is Ordinary‎:

$x^+ \notin x^+$
$\Box$

It remains to be shown that if $C$ is a chain of ordinals all of which are ordinary, then $\bigcup C$ is ordinary.

Let $C$ be a chain of ordinals.
From Union of Set of Ordinals is Ordinal, $\bigcup C$ is itself an ordinal.

Let $\alpha = \bigcup C$.
Aiming for a contradiction, suppose $\bigcup C$ is not ordinary.
That is, suppose that $\alpha \in \alpha$.
Then:

$\alpha \in \bigcup C$
Hence for some $\beta \in C$:

$\alpha \in \beta$
But:

$\beta \in C$
and so:

$\beta \subseteq \bigcup C$
That is:

$\beta \subseteq \alpha$
Because $\alpha \in \beta$ and Ordinal is Transitive:

$\alpha \subseteq \beta$
Hence by definition of set equality:

$\alpha = \beta$
That is:

$\beta \in \beta$
Thus some element of $C$, that is, $\beta$, is an element of itself.
That is, not all elements of $C$ are ordinary.
This contradicts our assertion that all elements of $C$ are ordinary.
Hence by Proof by Contradiction we have that if $C$ is a chain of ordinals all of which are ordinary, then $\bigcup C$ is ordinary:

$\bigcup C \notin \bigcup C$
$\Box$

The result then follows by the Principle of Superinduction.
$\blacksquare$





