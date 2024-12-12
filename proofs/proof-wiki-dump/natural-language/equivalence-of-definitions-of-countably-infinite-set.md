# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Countably_Infinite_Set



Theorem
Let $S$ be a set.

The following definitions of the concept of Countably Infinite Set are equivalent:

Definition 1
$S$ is countably infinite if and only if there exists a bijection:

$f: S \to \N$
where $\N$ is the set of natural numbers.

Definition 2
$S$ is countably infinite if and only if there exists a bijection:

$f: S \to \Z$
where $\Z$ is the set of integers.


Proof
From Integers are Countably Infinite there is a bijection between $\Z$, the set of integers, and $\N$, the set of natural numbers.
Let $h: \N \to \Z$ be such a bijection.

Let $f: S \to \N$ be a bijection.
From Composite of Bijections is Bijection:

$h \circ f: S \to \Z$ is a bijection.

Similarly, let $g: S \to \Z$ be a bijection.
By Inverse of Bijection is Bijection, $h^{-1}: \Z \to \N$ is a bijection.
Again from Composite of Bijections is Bijection:

$h^{-1} \circ g: S \to \N$ is a bijection.
Hence the result.
$\blacksquare$





