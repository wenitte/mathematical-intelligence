# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Abel%27s_Generalisation



Theorem
$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$
for $n \in \Z_{\ge 0}$ and $x \in \R_{\ne 0}$.


Special Case: $x + y = 0$
Consider Abel's Generalisation of Binomial Theorem:

$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$

This holds in the special case where $x + y = 0$.


Negative $n$
Abel's Generalisation of Binomial Theorem:

$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$
does not hold for $n \in \Z_{< 0}$.


Proof 1
By admitting $y = \paren {x + y} - x$, we have that:

$\paren {x + y}^n = \paren {x + \paren {x + y} - x}^n$

Expanding the right hand side in powers of $\paren {x + y}$:














\(\ds \)

\(\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {x + \paren {x + y} + k z}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom n k x \paren {x - k z}^{k - 1} \sum_j \paren {x + y}^j \paren {-x + k z}^{n - k - j} \binom {n - k} j\)




















\(\ds \)

\(=\)







\(\ds \sum_j \binom n j \paren {x + y})^j \sum_k \binom {n - j} {n - j - k} x \paren {x - k z}^{k - 1} \paren {-x + k z}^{n - k - j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop \le n} \binom n j \paren {x + y}^j 0^{n - j}\)





Abel's Generalisation of Binomial Theorem: Special Case $x + y = 0$














\(\ds \)

\(=\)







\(\ds \paren {x + y}^n\)





Binomial Theorem



$\blacksquare$


Proof 2
From this formula:

$(1): \quad \ds \sum_{k \mathop \in \Z} \binom n k x \paren {x + k z}^{k - 1} y \paren {y + \paren {n - k} z}^{n - k - 1} = \paren {x + y} \paren {x + y + n z}^{n - 1}$
The given formula:

$\ds \paren {x + y}^n = \sum_k \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}$
can then be transformed into $(1)$ by


This needs considerable tedious hard slog to complete it.In particular: somehowTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 3
From Hurwitz's Generalisation of Binomial Theorem:

$(1): \quad \paren {x + y}^n = \ds \sum x \paren {x + \epsilon_1 z_1 + \cdots + \epsilon_n z_n}^{\epsilon_1 + \cdots + \epsilon_n - 1} \paren {y - \epsilon_1 z_1 - \cdots - \epsilon_n z_n}^{n - \epsilon_1 - \cdots - \epsilon_n}$
Setting $z = z_1 = z_2 = \cdots z_n$ we have:














\(\ds \)

\(\)







\(\ds \sum x \paren {x + \epsilon_1 z + \cdots + \epsilon_n z}^{\epsilon_1 + \cdots + \epsilon_n - 1} \paren {y - \epsilon_1 z - \cdots - \epsilon_n z}^{n - \epsilon_1 - \cdots - \epsilon_n}\)




















\(\ds \)

\(=\)







\(\ds \sum \binom n k x \paren {x + k z}^{k - 1} \paren {y - k z}^{n - k}\)





where $\epsilon_1 + \cdots + \epsilon_n = k$














\(\ds \)

\(=\)







\(\ds \sum \binom n {n - k} x \paren {x + k z}^{k - 1} \paren {y - k z}^{n - k}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \sum \binom n k x \paren {x - k z}^{k - 1} \paren {y + k z}^{n - k}\)









Hence the result.


Source of Name
This entry was named for Niels Henrik Abel.


Historical Note
Niels Henrik Abel presented this generalisation of the Binomial Theorem in $1826$ in the first volume of August Leopold Crelle's Journal für die reine und angewandte Mathematik.


Sources
1826: Niels Henrik Abel: Beweis eines Ausdruckes, von welchem die Binomial-Formel ein einzelner Fall ist. (J. reine angew. Math. Vol. 1: pp. 159 – 160)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $(16)$




