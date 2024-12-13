# 

Source: https://proofwiki.org/wiki/Russell%27s_Paradox

  This article was Featured Proof between 14 December 2008 and 21 December 2008.




Theorem
The Axiom of Abstraction leads to a contradiction.


Corollary
$\not \exists x: \forall y: \paren {\map \RR {x, y} \iff \neg \map \RR {y, y} }$


Proof 1
Sets have elements.
Some of those elements may themselves be sets.
So, given two sets $S$ and $T$, we can ask the question:

Is $S$ an element of $T$?
The answer will either be yes or no.
In particular, given any set $S$, we can ask the question:

Is $S$ an element of $S$?
Again, the answer will either be yes or no.
Recall the definitions for a set to be:

ordinary if and only if it is not an element of itself
extraordinary if and only if it is an element of itself.

Thus, $\map P S = S \in S$ is a property on which we can use the Axiom of Abstraction to build the set $T$ of all extraordinary:

$T = \set {S: S \in S}$
which is the set of all sets which contain themselves.

Or we can apply the Axiom of Abstraction to build the set $T$ of all ordinary sets:

$R = \set {S: S \notin S}$
($R$ for Russell, of course.)

We ask the question:

Is $R$ itself an element of $R$?
There are two possible answers: yes or no.
If $R \in R$, then $R$ must satisfy the property that $R \notin R$.
So from that contradiction we know that $R \in R$ does not hold.
So the only other answer, $R \notin R$, must hold instead.
But now we see that $R$ satisfies the conditions of the property that $R \in R$.
So we can see that $R \notin R$ does not hold either.
Thus we have generated a contradiction from the Axiom of Abstraction.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose the Axiom of Abstraction, that for all predicates $P$ where $S$ is not free:

$\exists S : \forall x : \paren {x \in S \iff \map P x}$
Since $x \notin x$ is a predicate where $S$ is not free, it follows that:

$\exists S : \forall x : \paren {x \in S \iff x \notin x}$
is an instance of the Axiom of Abstraction.
By Existential Instantiation:

$\forall x: \paren {x \in S \iff x \notin x}$
By Universal Instantiation:

$S \in S \iff S \notin S$
But this contradicts Biconditional of Proposition and its Negation.
Thus, the Axiom of Abstraction yields a contradiction.
$\blacksquare$


Also presented as
Russell's Paradox can also be presented as:

There is no set $A$ that has every set as its elements.
Its proof follows the same lines: by assuming that such an $A$ exists, and considering the set $\set {x \in A: \map R x}$ where $\map R x$ is the property $x \notin x$.
The same conclusion is reached.


Also known as
Russell's Paradox is also known as Russell's Antinomy.


Also see
Barber Paradox


Source of Name
This entry was named for Bertrand Russell.


Historical Note
Russell's Paradox was devised by Bertrand Russell in $1901$.
He communicated it in a letter to Gottlob Frege on $16$ June $1902$, and apparently also to Giuseppe Peano some time earlier.
It was first published in 1903: Bertrand Russell: The Principles of Mathematics.

This paradox is one of a series of antinomies arising from the inherent contradiction in allowing unrestricted use of the Axiom of Abstraction. In this case, it is being used to obtain a set which contains itself if and only if it does not contain itself.
A desire to avoid such antinomies was a motivation towards the development of various systems of axiomatic set theory.
The best-known system of axiomatic set theory, ZFC, includes only (relatively) restrictive methods of generating new sets by using properties
In particular:

The Axiom of Specification allows us to use properties to define only subsets of sets which have already been demonstrated as being allowed to exist.
The Axiom of Replacement uses only those properties which define functions.
These restrictions both make the above argument invalid in ZFC, since the justification for the existence of the set $R$ is removed.

Some authors, for example 1965: J.A. Green: Sets and Groups, sidestep this issue:

This logical impasse can be avoided by restricting the notion of set, so that 'very large' collections ... are not counted as sets. However this is done at some cost in simplicity, and in this book we shall do no more than keep to sets which appear to be harmless, and hope that paradoxes will not appear.
Again, from 1971: Allan Clark: Elements of Abstract Algebra:

It is well known that an informal point of view in the theory of sets leads to contradictions. These difficulties all arise in operations with very large sets. We shall never need to deal with any sets large enough to cause trouble in this way, and, consequently, we may put aside all such worries.
1975: T.S. Blyth: Set Theory and Abstract Algebra puts it as:

This is not a serious problem since fortunately most sets encountered in mathematics are of a harmless nature ... It is very fortunate that most of the properties dealt with in mathematics (and indeed all the properties we will deal with) are "set forming" in the sense that there is a set whose elements satisfy the property in question.
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) remarks:

The paradox is resolved by restricting the ways in which sets can be formed, so that it becomes inadmissible to consider 'the set of all those sets that are not members of themselves'.  There are several ways of doing this, but they need not concern us here; they will not play a role in the rather simple set-theoretical arguments we shall meet.


Sources
1963: George F. Simmons: Introduction to Topology and Modern Analysis ... (previous) ... (next): $\S 1$: Sets and Set Inclusion
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 2$: Equivalence of Sets. The Power of a Set: Problem $10$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Russell's paradox
1993: Richard J. Trudeau: Introduction to Graph Theory ... (previous) ... (next): $2$. Graphs: Paradox
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Introduction
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): axiom of abstraction
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Russell's paradox
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): set (class)
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $1$. Notation, Conventions: $6$: Theorem $1.2$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): axiom of abstraction
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Russell's paradox
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): set (class)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 8$ Russell's paradox
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Russell's paradox

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Determine which of these actually have a proof, and if they do, which one.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 4.14$
2002: Thomas Jech: Set Theory (3rd ed.) ... (previous) ... (next): Chapter $1$: Why Axiomatic Set Theory?




