# 

Source: https://proofwiki.org/wiki/Composition_of_Computably_Uniformly_Continuous_Real_Functions_is_Computably_Uniformly_Continuous

Theorem
Let $f,g : \R \to \R$ be computably uniformly continuous real functions.
Let $h : \R \to \R$ be defined as:

$\map h x = \map f {\map g x}$

Then $h$ is computably uniformly continuous.


Proof
By definition of computably uniformly continuous, there exist total recursive functions $d_f, d_g : \N \to \N$ such that:

For all $n \in \N$ and $x,y \in \R$ such that:
$\size {x - y} < \dfrac 1 {\map {d_f} n + 1}$
it holds that:
$\size {\map f x - \map f y} < \dfrac 1 {n + 1}$
and:

For all $n \in \N$ and $x,y \in \R$ such that:
$\size {x - y} < \dfrac 1 {\map {d_g} n + 1}$
it holds that:
$\size {\map g x - \map g y} < \dfrac 1 {n + 1}$

Define:

$\map {d_h} n = \map {d_g} {\map {d_f} n}$
As $d_h$ is obtained by substitution on recursive functions, it is also recursive.
As both of those functions are total, it follows that $d_h$ is also total.

Now, let $n \in \N$ and $x,y \in \R$ satisfy:

$\size {x - y} < \dfrac 1 {\map {d_h} n + 1}$
By definition of $d_h$:

$\size {x - y} < \dfrac 1 {\map {d_g} {\map {d_f} n} + 1}$
By assumption on $d_g$:

$\size {\map g x - \map g y} < \dfrac 1 {\map {d_f} n + 1}$
By assumption on $d_f$:

$\size {\map f {\map g x} - \map f {\map g y}} < \dfrac 1 {n + 1}$
But:

$\map f {\map g x} = \map h x$
$\map f {\map g y} = \map h y$
Thus:

$\size {\map h x - \map h y} < \dfrac 1 {n + 1}$

As $n$, $x$, and $y$ were arbitrary, $h$ is computably uniformly continuous by definition.
$\blacksquare$





