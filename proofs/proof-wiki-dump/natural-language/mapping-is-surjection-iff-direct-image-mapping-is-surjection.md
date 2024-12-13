# 

Source: https://proofwiki.org/wiki/Mapping_is_Surjection_iff_Direct_Image_Mapping_is_Surjection



Theorem
Let $f: S \to T$ be a mapping.
Let $f^\to: \powerset S \to \powerset T$ be the direct image mapping of $f$.

Then:

$f^\to$ is a surjection.
if and only if

$f: S \to T$ is also a surjection.


Proof
Necessary Condition
Follows from Direct Image Mapping of Surjection is Surjection.
$\Box$


Sufficient Condition
Let $y \in S$.
Since $f^\to$ is a surjection:

$\exists U \in \powerset S: \map {f^\to} U = \set y$
From definition of direct image mapping:

$\set y \ne \O \implies U \ne \O$
Let $x \in U$.
Then from definition of direct image mapping:

$\map f x = y$
Since $y$ is arbitrary, $f$ is a surjection.
$\blacksquare$


Also see
Direct Image Mapping of Surjection is Surjection




