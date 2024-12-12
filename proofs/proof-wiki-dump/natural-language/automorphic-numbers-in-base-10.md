# 

Source: https://proofwiki.org/wiki/Automorphic_Numbers_in_Base_10



Theorem
If leading zeroes are allowed, there are exactly $4$ $n$-digit automorphic numbers in base $10$:

$00 \dots 00$
$00 \dots 01$
$5^{2^{n - 1} } \pmod {10^n}$
$6^{5^{n - 1} } \pmod {10^n}$


Proof
The proof proceeds by induction on $n$.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

There are exactly $4$ $n$-digit automorphic numbers of the forms above.


Basis for the Induction
For $n = 1$:
$0, 1, 5, 6$ are the only $1$-digit automorphic numbers, and we have:

$5^{2^0} = 5$
$6^{5^0} = 6$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
We assume that for some $k \ge 1$, there are exactly $4$ $k$-digit automorphic numbers of the forms above.


Induction Step
This is the induction step:
We aim to construct $x$, a $\paren {k + 1}$-digit automorphic number.
By Left-Truncated Automorphic Number is Automorphic, after removing the leftmost digit, what remains is a $k$-digit automorphic number.

Write $x = 10^k a + b$, where $a$ is the leftmost digit of $x$.
We have:














\(\ds x^2\)

\(=\)







\(\ds \paren {10^k a + b}^2\)




















\(\ds \)

\(=\)







\(\ds 10^{2 k} a^2 + 2 \times 10^k a b + b^2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds 10^{2 k} a^2 + 2 \times 10^k a b + \paren {b + 10^k N}\)





for some $N \in \N$; Definition of Automorphic Number














\(\ds \)

\(\equiv\)







\(\ds 10^k \paren {2 a b + N} + b\)

\(\ds \pmod {10^{k + 1} }\)


















\(\ds \)

\(\equiv\)







\(\ds x\)

\(\ds \pmod {10^{k + 1} }\)



Definition of Automorphic Number














\(\ds \)

\(\equiv\)







\(\ds 10^k a + b\)

\(\ds \pmod {10^{k + 1} }\)












\(\ds \leadsto \ \ \)





\(\ds 2 a b + N\)

\(\equiv\)







\(\ds a\)

\(\ds \pmod {10}\)












\(\ds \leadsto \ \ \)





\(\ds N\)

\(\equiv\)







\(\ds a \paren {1 - 2 b}\)

\(\ds \pmod {10}\)







By Left-Truncated Automorphic Number is Automorphic, $b$ must end in $0, 1, 5, 6$.
We see that:

$a \equiv N \pmod {10}$ for $b$ ending in $0$ or $5$;
$a \equiv -N \pmod {10}$ for $b$ ending in $1$ or $6$;
So the choice of $x$ is completely determined by $b$.
This shows that there are exactly $4$ $\paren {k + 1}$-digit automorphic numbers.
$\Box$

Now we show that the $4$ numbers are indeed of the forms given above.
For any $n \in \Z_{>0}$, we have:














\(\ds 0^2 - 0\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {10^n}\)


















\(\ds 1^2 - 1\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {10^n}\)




















\(\ds \paren {5^{2^{n - 1} } }^2 - 5^{2^{n - 1} }\)

\(=\)







\(\ds 5^{2^{n - 1} } \paren {5^{2^n} - 1}\)




















\(\ds \)

\(=\)







\(\ds 5^{2^{n - 1} } \paren {5 - 1} \paren {5 + 1} \paren {5^2 + 1} \dots \paren {5^{2^{n - 2} } + 1}\)





Difference of Two Squares



Since $2^{n - 1} \ge n$ and the each factor on the right is divisible by $2$, the above product is divisible by $5^n 2^n = 10^n$.















\(\ds \paren {6^{5^{n - 1} } }^2 - 6^{5^{n - 1} }\)

\(=\)







\(\ds 6^{5^{n - 1} } \paren {6^{5^{n - 1} } - 1}\)




















\(\ds \)

\(=\)







\(\ds 6^{5^{n - 1} } \paren {6^{5^{n - 2} } - 1} \paren {6^{4 \times 5^{n - 2} } + 6^{3 \times 5^{n - 2} } + 6^{2 \times 5^{n - 2} } + 6^{5^{n - 2} } + 1}\)





Difference of Two Odd Powers














\(\ds \)

\(=\)







\(\ds 6^{5^{n - 1} } \paren {6^{5^{n - 2} } - 1} \paren {5 N}\)





for some $N \in \N$: Congruence of Powers














\(\ds \)

\(:\)







\(\ds \)




















\(\ds \)

\(=\)







\(\ds 2^{5^{n - 1} } 3^{5^{n - 1} } \paren {6^{5^0} - 1} \paren {5^{n - 1} C}\)





for some $C \in \N$














\(\ds \)

\(=\)







\(\ds 2^{5^{n - 1} } 3^{5^{n - 1} } \paren {5^n C}\)









Since $5^{n - 1} \ge n$, the above product is divisible by $2^n 5^n = 10^n$.
Hence for each number above:

$x^2 \equiv x \pmod {10^n}$
showing they are indeed automorphic.

So $\map P k \implies \map P {k + 1}$ and thus it follows by the Principle of Mathematical Induction that these are all the automorphic numbers.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: Add a proof via p-adic numbersYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




