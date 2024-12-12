# 

Source: https://proofwiki.org/wiki/Counting_Theorem



Theorem
Every well-ordered set is order isomorphic to a unique ordinal.


Corollary
Every properly well-ordered proper class is order isomorphic to the class of all ordinals.


Proof 1
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


Proof 2
Let $A$ be a properly well-ordered class.
Let $\On$ denote the class of all ordinals.
By the Comparability Theorem, either:

$A$ is order isomorphic to a lower section of $\On$
or:

$\On$ is order isomorphic to a lower section of $A$.

Let $A$ be a set.
From Well-Ordering on Set is Proper Well-Ordering, $A$ is a properly well-ordered class.
As $A$ is a set, every lower section of $A$ is a set.
Aiming for a contradiction, suppose $\On$ is order isomorphic to a lower section $L$ of $A$.
Then $\On$ would then be in one-to-one correspondence with that lower section.
Thus there would be a mapping $\phi: L \to \On$.
By the Axiom of Replacement, $\phi \sqbrk L = \On$ is then a set.
But from Class of All Ordinals is Proper Class, $\On$ is a proper class.
From this contradiction it follows that $\On$ cannot be order isomorphic to a lower section $L$ of $A$.
Hence $A$ is order isomorphic to a lower section of $\On$.
From Lower Section of Class of All Ordinals is Ordinal, that means $A$ is order isomorphic to an ordinal.
From Distinct Ordinals are not Order Isomorphic it follows that $A$ is order isomorphic to exactly one such ordinal.
$\blacksquare$


Also presented as
Some sources present the Counting Theorem as the definition of an ordinal as the order type of a well-ordering.


Motivation
What we have achieved with the Counting Theorem is that for any properly well-ordered collection $A$, we can assign ordinal numbers as indices of the elements of $A$, treating the latter as a sequence:

the $1$st, the $2$nd, $\ldots$, the $\alpha$th, $\ldots$ elements of $A$
and moreover, we can assign these indices in an order-preserving way.
That is, for all ordinal numbers $\alpha$ and $\beta$, $\alpha < \beta$ if and only if the $\alpha$th element comes before the $\beta$th element.


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




