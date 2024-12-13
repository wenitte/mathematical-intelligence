# 

Source: https://proofwiki.org/wiki/Sch%C3%B6nemann-Eisenstein_Theorem



Theorem
Let $\map f x = a_d x^d + a_{d - 1} x^{d - 1} + \dotsb + a_0 \in \Z \sqbrk x$ be a polynomial over the ring of integers $\Z$.
Let $p$ be a prime such that:

$(1): \quad p \divides a_i \iff i \ne d$
$(2): \quad p^2 \nmid a_0$
where $p \divides a_i$ signifies that $p$ is a divisor of $a_i$.

Then $f$ is irreducible in $\Q \sqbrk x$.


Proof
By Gauss's Lemma on Irreducible Polynomials, it suffices to show that $f$ is irreducible in $\Z \sqbrk x$.

Aiming for a contradiction, suppose that $f = g h$ where $g, h \in \Z \sqbrk x$ are both non-constant.
Let:

$\map g x = b_e x^e + b_{e - 1} x^{e - 1} + \dotsb + b_0$
$\map h x = c_f x^f + c_{f - 1} x^{f - 1} + \dotsb + c_0$

Then we have for each $i$:

$\ds a_i = \sum_{j + k \mathop = i} {b_j c_k}$
In particular, it follows that:

$a_0 = b_0 c_0$
Possibly after exchanging $g$ and $h$, we may arrange that:

$p \nmid c_0$
by condition $(2)$.
From condition $(1)$, it follows that then necessarily:

$p \divides b_0$

We also have:

$a_d = b_e c_f$
and by condition $(1)$:

$p \nmid a_d$
and hence:

$p \nmid b_e$
It follows that there exists a smallest positive $i$ such that:

$p \nmid b_i$

Naturally, $i \le e$. 
By assumption, both $g$ and $h$ are non-constant.
Hence by Degree of Product of Polynomials over Integral Domain:

$i < d$

This article, or a section of it, needs explaining.In particular: Re-evaluate the above link - may need to be Degree of Product of Polynomials over Integral Domain not Less than Degree of Factors. Clarification needed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Consider:

$a_i = b_0 c_i + b_1 c_{i - 1} + \dotsb + b_i c_0$
with the convention that $c_j = 0$ if $j > f$.
By the minimality of $i$, it follows that:

$p \divides b_k$
for $0 \le k < i$.
Also, since neither $c_0$ nor $b_i$ is divisible by $p$, the last term $b_i c_0$ is not divisible by $p$.
Thus, we conclude that:

$p \nmid a_i$
which contradicts condition $(1)$.

Therefore, $f$ is irreducible.
$\blacksquare$


Warning
The converse of the Schönemann-Eisenstein Theorem does not hold.
That is, if a polynomial over $\Z$ is irreducible in $\Q \sqbrk x$, it is not necessarily the case that the criteria:

$(1): \quad p \divides a_i \iff i \ne d$
$(2): \quad p^2 \nmid a_0$
where:

$p$ is a prime
$p \divides a_i$ signifies that $p$ is a divisor of $a_i$
both hold.
See Schönemann-Eisenstein Theorem: $x^3 + 2 x + 4$ for a counterexample.


Examples
Example: $x^3 + 2 x + 2$
Consider the polynomial:

$\map P x = x^3 + 2 x + 2$
By the Schönemann-Eisenstein Theorem, $\map P x$ is irreducible over $\Q \sqbrk x$.


Example: $x^3 + 2 x + 4$
Consider the polynomial:

$\map P x = x^3 + 2 x + 4$
By the Schönemann-Eisenstein Theorem, it is not possible to tell whether or not $\map P x$ is irreducible over $\Q \sqbrk x$.
In fact, in this case $\map P x$ is indeed irreducible.


Example: $x^3 - 2 x + 4$
Consider the polynomial:

$\map P x = x^3 - 2 x + 4$
By the Schönemann-Eisenstein Theorem, it is not possible to tell whether or not $\map P x$ is irreducible over $\Q \sqbrk x$.
In fact, in this case $\map P x$ is not irreducible over $\Q \sqbrk x$.


Also known as
The Schönemann-Eisenstein Theorem is also (and usually) known as Eisenstein's Criterion.


Source of Name
This entry was named for Theodor Schönemann and Ferdinand Gotthold Max Eisenstein.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Eisenstein's criterion
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Eisenstein's criterion
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Eisenstein's criterion




