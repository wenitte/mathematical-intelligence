# 

Source: https://proofwiki.org/wiki/Approximation_to_Power_of_7_by_Power_of_10

Theorem
$7^{510} \approx 1 \cdotp 00000 \, 09377 \, 76536 \ldots \times 10^{431}$
This is the closest known approximation of a power of $7$ by a power of $10$.


Proof
An intuition is given as follows:

Suppose for some $m, n \in \N$:

$7^m = c \cdot 10^n$, where $c$ is very close to $1$.
Taking common logarithm:

$m \log 7 = \log c + n$
Which leads to:

$\log 7 = \dfrac n m + \dfrac {\log c} m$
where $\dfrac {\log c} m$ is very close to $0$.
To make a good approximation is to minimize $\size {\log c}$.

One may calculate the continued fraction of $\log 7$.
We use continued fractions because Convergents are Best Approximations.
One obtains $\sqbrk {0; 1, 5, 2, 5, 6, 1, 4813, 1, 1, 2, 2, \dots}$.
This sequence is A082571 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Let $\dfrac {p_n} {q_n}$ be the convergent $\sqbrk {0; a_1, \dots, a_n}$.
Then:














\(\ds \size {\log c}\)

\(=\)







\(\ds q_k \size {\log 7 - \frac {p_k} {q_k} }\)




















\(\ds \)

\(<\)







\(\ds q_k \paren {\frac 1 {q_k q_{k + 1} } }\)





Accuracy of Convergents of Continued Fraction














\(\ds \)

\(=\)







\(\ds \frac 1 {q_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a_{k + 1} q_k + q_{k - 1} }\)





Recursive Definition of Denominators of Convergents



Thus, at least intuitively, the larger the value of the next $a_i$, the smaller $\size {\log c}$ is.


This needs considerable tedious hard slog to complete it.In particular: I am not familiar with this, this is just some justificationTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

$4813$ is the largest number in the expansion among at least the first $100$ numbers.
Note that $\sqbrk {0; 1, 5, 2, 5, 6, 1} = \dfrac {431} {510}$
This gives the estimate $7^{510} \approx 10^{431}$.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $510$




