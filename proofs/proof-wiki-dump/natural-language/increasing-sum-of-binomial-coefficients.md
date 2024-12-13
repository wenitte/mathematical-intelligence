# 

Source: https://proofwiki.org/wiki/Increasing_Sum_of_Binomial_Coefficients



Theorem
Let $n \in \Z$ be an integer.

Then:

$\ds \sum_{j \mathop = 0}^n j \binom n j = n 2^{n - 1}$
where $\dbinom n k$ denotes a binomial coefficient.

That is:

$1 \dbinom n 1 + 2 \dbinom n 2 + 3 \dbinom n 3 + \dotsb + n \dbinom n n = n 2^{n - 1}$


Proof 1













\(\ds \sum_{j \mathop = 0}^n j \binom n j\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \binom n j\)





as $0 \dbinom n 0 = 0$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n n \binom {n - 1} {j - 1}\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \sum_{j \mathop = 0}^{n - 1} \binom {n - 1} j\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds n 2^{n - 1}\)





Sum of Binomial Coefficients over Lower Index



$\blacksquare$


Proof 2
From the Binomial Theorem:

$(1): \quad \paren {1 + x}^n = \ds \sum_{j \mathop = 0}^n \dbinom n j x^n$
Differentiating $(1)$ with respect to $x$:














\(\ds n \paren {1 + x}^{n - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \dbinom n j x^{j - 1}\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds n \paren {1 + 1}^{n - 1}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j \dbinom n j\)





setting $x = 1$



Hence the result.
$\blacksquare$



This article is complete as far as it goes, but it could do with expansion.In particular: $2$ further approaches are offered by 1980: David M. Burton: Elementary Number Theory (revised ed.) as hints in the exercise in which this appearsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.14$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $3 \ \text{(c)}$




