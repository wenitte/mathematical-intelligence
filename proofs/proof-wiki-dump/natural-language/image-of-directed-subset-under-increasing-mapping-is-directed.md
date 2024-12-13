# 

Source: https://proofwiki.org/wiki/Image_of_Directed_Subset_under_Increasing_Mapping_is_Directed

Theorem
Let $\left({S, \preceq}\right)$, $\left({T, \precsim}\right)$ be ordered sets.
Let $f: S \to T$ be an increasing mapping.
Let $D$ be a directed subset of $S$.

Then

$f^\to \left({D}\right)$ is also a directed subset of $T$
where

$f^\to \left({D}\right)$ denotes the image of $D$ under $f$.


Proof
Let $x, y \in f^\to\left({D}\right)$.
By definition of image of set:

$\exists a \in D: x = f \left({a}\right)$
and

$\exists b \in D: y = f \left({b}\right)$
By definition of directed subset:

$\exists c \in D: a \preceq c \land b \preceq c$
By definition of image of set:

$f\left({c}\right) \in f^\to\left({D}\right)$
By definition of increasing mapping:

$x \precsim f\left({c}\right)$ and $y \precsim f\left({c}\right)$
Thus by definition

$f^\to\left({D}\right)$ is a directed subset of $T$.
$\blacksquare$


Sources
Mizar article YELLOW_2:15




