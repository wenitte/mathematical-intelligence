# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Even_Integer



Theorem
The following definitions of the concept of Even Integer are equivalent:

Definition 1
An integer $n \in \Z$ is even if and only if it is divisible by $2$.

Definition 2
An integer $n \in \Z$ is even if and only if it is of the form:

$n = 2 r$
where $r \in \Z$ is an integer.

Definition 3
An integer $n \in \Z$ is even if and only if:

$x \equiv 0 \pmod 2$
where the notation denotes congruence modulo $2$.


Proof
$(1)$ if and only if $(2)$
By definition of divisor, $n$ is divisible by $2$ if and only if:

$n = 2 r$
where $r \in \Z$.
Thus definition 1 is logically equivalent to definition 2.
$\Box$


$(2)$ if and only if $(3)$
By definition of congruence modulo $2$:

$x \equiv y \pmod 2 \iff \exists r \in \Z: x - y = 2 r$
Setting $y = 0$:

$x \equiv 0 \pmod 2 \iff \exists r \in \Z: x = 2 r$
Thus definition 2 is logically equivalent to definition 3.
$\blacksquare$





