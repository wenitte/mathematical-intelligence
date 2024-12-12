# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Purely_Inseparable_Extension



Theorem
Let $E/F$ be an algebraic field extension.
The following definitions of the concept of Purely Inseparable Field Extension are equivalent:

Definition 1
The extension $E/F$ is purely inseparable if and only if every element $\alpha \in E \setminus F$ is inseparable.


Definition 2
Let $F$ have positive characteristic $p$.

The extension $E/F$ is purely inseparable if and only if for each $\alpha \in E$ there exists $n \in \N$ such that $\alpha^{p^n} \in F$.


Definition 3
Let $F$ have positive characteristic $p$.

The extension $E/F$ is purely inseparable if and only if each element of $E$ has a minimal polynomial of the form $X^{p^n} - a$.


Proof
Definition $3$ implies Definition $2$
Suppose each $\alpha \in E$ has a minimal polynomial of the form $X^{p^n} - a$ where $n \in \N$. Then

$\alpha^{p^n} = a$
By definition of minimal polynomial, $a \in F$. So

$\alpha^{p^n} \in F$
$\Box$

Definition $1$ implies Definition $3$
Let $p$ be the characteristic of $F$.
Suppose each $\alpha \in E$ is inseparable.
Let $f$ be the minimal polynomial of $\alpha$ over $F$.
Then $\map f X$ is irreducible in $F \sqbrk X$.
I claim that $f' = 0$ because,
By definition of inseparable element, $\map f X$ of $\alpha$ is not separable. So in the closure $\bar F$ of $F$, the roots of $f$ are not distinct, 
there is $a \in \bar F$ such that

$\paren{X - a}^2 \divides \map f X$
Writing $\map f X = \paren{X - a}^2 \map h X$ gives that

$\map {f'} X = 2 \paren {X - a} \map h X + \paren {X - a}^2 \map {h'} X$
which shows that $\map {f'} a=0$.
Then, since $f$ is irreducible, it divides every polynomial in $F \sqbrk X$ that has $a$ as a root. Thus

$f \divides f'$
but since $\deg f > \deg f'$,

$f' = 0$.

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: The above actually proves Irreducible Polynomial is Separable iff Derivative is NonzeroYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Write

$\map f X = \sum_{i \mathop = 0}^n a_i X^i$ where $a_n \neq 0$
Then $\map {f'} X = 0$ means
$0 = \sum_{i \mathop = 1}^n i a_i X^{i - 1}$
and thus $i a_i = 0$ for $0 \leq i \leq N$.
Since $a_N \neq 0$ and $N a_N = 0$, we conclude that $p > 0$ and that $a_i = 0$ for all $i$ not a multiple of $p$.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: The above actually proves Imperfect Field is of Positive Characteristic, or in other words, Field of Characteristic 0 is PerfectYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Discarding terms that must be zero, we can now rewrite

$\map f X = \sum_{j \mathop = 0}^{N / p} a_{p j} X^{p j}$
So

$\map f X = \map g {X^p}$
where

$\map g X = \sum_{j \mathop = 0}^{N / p} a_{p j} X^j$

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: The above actually proves Inseparable Polynomial is a Polynomial in X^pYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
To see that $g$ must be irreducible, we observe that a proper factorization

$\map g X = \map h X \map k X$
would yield the proper factorization

$\map f X = \map h {X^p} \map k {X^p}$
but $f$ is irreducible, so $g$ must be irreducible.
If $\deg g > 1$, we can repeat the above process. Using induction on the degree,

$\map f X = \map h {X^{p^n}}$
for some polynomial $\map h X \in F \sqbrk X$ with $\deg h = 1$.
Since $\map f \alpha = 0$,

$\map h {\alpha^{p^n}} = 0$
but $\deg h = 1$, its root must be in $F$, let $a = \alpha^{p^n} \in F$.
Since $f$ is monic, we can assume $h$ is monic, then

$\map h X = X - a$
then

$\map f X = \map h {X^{p^n}} = X^{p^n} - a$
$\Box$

Definition $2$ implies Definition $1$
Suppose $F$ have positive characteristic $p$ and for each $\alpha \in E$ there exists $n \in \N$ such that $\alpha^{p^n} \in F$.
The polynomial

$\paren{X - \alpha}^{p^n} = X^{p^n} - \alpha^{p^n}$
is in $F \sqbrk X$, since $\alpha^{p^n} \in F$.
Let $\alpha \in E \setminus F$. Then $p^n > 1$ and $\deg f > 1$.
To show that $\alpha$ is inseparable, we let $f$ be the minimal polynomial of $\alpha$ over $F$
Since $\alpha$ is a root of $\paren{X - \alpha}^{p^n} \in F \sqbrk X$,

$f \divides \paren{X - \alpha}^{p^n}$
but $p^n > 1$ and $\deg f > 1$, we get

$\paren {X - \alpha}^2 \divides f$
so $f$ does not have distinct roots,
so $\alpha$ is inseparable, as required.
$\blacksquare$

Sources
1994: I. Martin Isaacs: Algebra: A Graduate Course: Chapter $19$ Separability and Inseparability $\S19$A Corollary $19.6$ -- $\S19$B Theorem $19.10$




