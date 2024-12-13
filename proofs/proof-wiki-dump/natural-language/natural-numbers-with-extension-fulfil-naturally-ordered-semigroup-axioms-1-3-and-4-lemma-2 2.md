# 

Source: https://proofwiki.org/wiki/Natural_Numbers_with_Extension_fulfil_Naturally_Ordered_Semigroup_Axioms_1,_3_and_4/Lemma_2



Lemma for Natural Numbers with Extension fulfil Naturally Ordered Semigroup Axioms 1, 3 and 4
Construction
Let $\N$ denote the set of natural numbers.
Let $\beta$ be an object such that $\beta \notin \N$
Let $M = \N \cup \set \beta$.
Let us extend the operation of natural number addition from $\N$ to $M$ by defining:














\(\ds 0 + \beta\)

\(=\)







\(\ds \beta + 0 = \beta\)




















\(\ds \beta + \beta\)

\(=\)







\(\ds \beta\)




















\(\ds n + \beta\)

\(=\)







\(\ds \beta + n = n\)










There exists a unique total ordering $\preccurlyeq$ on $M$ such that:

the restriction of $\preccurlyeq$ to $\N$ is the given total ordering $\le$ on $\N$
$0 \prec \beta \prec 1$
This total ordering we will rename $\le$ to overload the notation for $\N$.


Proof
We define $\preccurlyeq$ on $M$ as follows:

$a \preccurlyeq b \iff \begin {cases} a, b \in \N: a \le b \\ a = 0, b = \beta \\ a = \beta, b \in \N_{>0} \\ a = \beta, b = \beta \end {cases}$


Existence
The restriction of $\preccurlyeq$ to $\N$ is seen to be the total ordering $\le$ on $\N$.

We have that:

$0 \preccurlyeq \beta$ and $0 \ne \beta$
from which:

$0 \prec \beta$
and:

$\beta \preccurlyeq 1$ and $\beta \ne 1$
from which:

$\beta \prec 1$
and:

$\forall a \in \N_{>0}: \beta \preccurlyeq a$

Finally:

$\beta = \beta$
and so:

$\beta \preccurlyeq \beta$

This demonstrates that $\preccurlyeq$ is total.
Hence existence of the total ordering in question has been proven.
$\Box$


Uniqueness
Let $\preccurlyeq'$ be another total ordering on $M$ such that:

the restriction of $\preccurlyeq'$ to $\N$ is the given total ordering $\le$ on $\N$
$0 \prec' \beta \prec' 1$
We have by definition of $\le$ on $\N$ that:

$\forall a, b \in \N: a \le b \implies a \preccurlyeq' b$
From $0 \prec' \beta \prec' 1$ we have:

$0 \preccurlyeq' \beta$
$\beta \preccurlyeq' 1$
Because $\beta \preccurlyeq' 1$ and an ordering is transitive:

$\forall a \in \N: 1 \le a \implies \beta \preccurlyeq' a$
Then as an ordering is reflexive:

$\beta \preccurlyeq' \beta$

Hence $\preccurlyeq'$ is defined as:

$a \preccurlyeq' b \iff \begin {cases} a, b \in \N: a \le b \\ a = 0, b = \beta \\ a = \beta, b \in \N_{>0} \\ a = \beta, b = \beta \end {cases}$
which is seen to be exactly the same as $\preccurlyeq$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.2 \ \text{(b)}$




