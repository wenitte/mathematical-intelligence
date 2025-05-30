# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Order_Topology



Theorem
The following definitions of the concept of Order Topology are equivalent:

Definition 1
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $\XX$ be the set of open rays in $S$.
Let $\tau$ be the topology on $S$ generated by $\XX$.

Then $\tau$ is called the order topology on $S$.

Definition 2
Let $\struct {S, \preceq}$ be a totally ordered set.
Define:

$\map {\Uparrow} S = \set {s^\succ: s \in S}$
$\map {\Downarrow} S = \set {s^\prec: s \in S}$
where $s^\succ$ and $s^\prec$ denote the strict upper closure and strict lower closure of $s$, respectively.

The order topology $\tau$ on $S$ is the topology on $S$ generated by $\map {\Uparrow} S \cup \map {\Downarrow} S$.


Proof
By definition, an open ray of $S$ is defined as a subset of $S$ of one of the two forms:

An upward-pointing ray:
$\left\{{x \in S: s \prec x}\right\}$ (the strict upper closure of $s$), denoted $s^\succ$
A downward-pointing ray:
$\left\{{x \in S: x \prec s}\right\}$ (the strict lower closure of $s$), denoted $s^\prec$
from a given point $s \in S$.

Thus the set of open rays of $S$ can be expressed as:

the set of all subsets of $S$ of the form:
$\left\{ {s^\succ: s \in S}\right\}$
and:

the set of all subsets of $S$ of the form:
$\left\{ {s^\prec: s \in S}\right\}$

This is precisely the set ${\Uparrow} \left({S}\right) \cup {\Downarrow} \left({S}\right)$, where:

${\Uparrow} \left({S}\right) = \left\{{s^\succ: s \in S}\right\}$
${\Downarrow} \left({S}\right) = \left\{{s^\prec: s \in S}\right\}$
Hence the result, by definition of the topology on $S$ generated by a sub-basis of $S$.
$\blacksquare$





