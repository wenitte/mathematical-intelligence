# 

Source: https://proofwiki.org/wiki/Counting_Theorem/Proof_1



Theorem
Every well-ordered set is order isomorphic to a unique ordinal.


Proof
Existence
Let $\struct {S, \preceq}$ be a woset.
From Condition for Woset to be Isomorphic to Ordinal‎, it is enough to show that for every $a \in S$, the initial segment $S_a$ of $S$ determined by $a$ is order isomorphic to some ordinal.
Let:

$E = \set {a \in S: S_a \text{ is not isomorphic to an ordinal} }$
We will show that $E = \O$.

Aiming for a contradiction, suppose that $E \ne \O$.
Let $a$ be the minimal element of $E$.
This is bound to exist by definition of woset.
So, if $x \prec a$, it follows that $S_x$ is isomorphic to an ordinal.
But for $x \prec a$, we have $S_x = \paren {S_a}_x$ from definition of an ordinal.
So every segment of $S_a$ is isomorphic to an ordinal.
Hence from Condition for Woset to be Isomorphic to Ordinal‎, $S_a$ itself is isomorphic to an ordinal.
This contradicts the supposition that $a \in E$.
Hence $E = \O$ and existence has been proved.
$\Box$


Uniqueness
Uniqueness follows from Isomorphic Ordinals are Equal.
Hence the result.
$\blacksquare$


Also presented as
Some sources present the Counting Theorem as the definition of an ordinal as the order type of a well-ordering.


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.12$




