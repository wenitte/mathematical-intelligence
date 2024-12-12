# 

Source: https://proofwiki.org/wiki/Even_Integers_not_Sum_of_Two_Abundant_Numbers



Theorem
The even integers which are not the sum of $2$ abundant numbers are:

All even integers less than $24$;
$26, 28, 34, 46$


Proof
From Sequence of Abundant Numbers, the first few abundant numbers are:

$12, 18, 20, 24, 30, 36, 40, 42, 48$
Immediately we see that any number less than $2 \times 12 = 24$ cannot be expressed as a sum of $2$ abundant numbers.
The sum of the first $2$ abundant numbers is $12 + 18 = 30$, so $26$ and $28$ are not sums of $2$ abundant numbers.














\(\ds 34 - 12\)

\(=\)







\(\ds 22\)




















\(\ds 34 - 18\)

\(<\)







\(\ds \frac {34} 2\)




















\(\ds 46 - 12\)

\(=\)







\(\ds 34\)




















\(\ds 46 - 18\)

\(=\)







\(\ds 28\)




















\(\ds 46 - 20\)

\(=\)







\(\ds 26\)




















\(\ds 46 - 24\)

\(<\)







\(\ds \frac {46} 2\)









Since none of the differences above are abundant numbers, $34$ and $46$ are not sums of $2$ abundant numbers.

We demonstrate that $32$ and all even numbers from $36$ to $66$ except $46$ are sums of $2$ abundant numbers:














\(\ds 32\)

\(=\)







\(\ds 12 + 20\)




















\(\ds 38\)

\(=\)







\(\ds 18 + 20\)




















\(\ds 40\)

\(=\)







\(\ds 20 + 20\)




















\(\ds 44\)

\(=\)







\(\ds 20 + 24\)




















\(\ds 50\)

\(=\)







\(\ds 20 + 30\)




















\(\ds 52\)

\(=\)







\(\ds 12 + 40\)




















\(\ds 56\)

\(=\)







\(\ds 20 + 36\)




















\(\ds 58\)

\(=\)







\(\ds 18 + 40\)




















\(\ds 62\)

\(=\)







\(\ds 20 + 42\)




















\(\ds 64\)

\(=\)







\(\ds 24 + 40\)









The numbers $36, 42, 48, 54, 60$ and $66$ are multiples of $6$.
By Multiple of Perfect Number is Abundant, any multiple of $6$ greater than $6$ is abundant.
Hence these numbers can be expressed as:

$12 + \paren {n - 12}$
which are sums of $2$ multiples of $6$ greater than $6$.

Now that we show that all even numbers greater than $66$ are sums of $2$ abundant numbers.
By Multiple of Abundant Number is Abundant, any multiple of $20$ is abundant.
By Largest Number not Expressible as Sum of Multiples of Coprime Integers/Generalization, any even number greater than:

$\dfrac {6 \times 20} {\gcd \set {6, 20}} - 6 - 20 = 34$
is a sum of (possibly zero) multiples of $6$ and $20$.
Hence any even number greater than:

$34 + 6 \times 2 + 20 = 66$
is a sum of a multiple of $6$ greater than $6$ and a non-zero multiple of $20$, which by above is a sum of $2$ abundant numbers.
This shows that the list above is complete.
$\blacksquare$


Also see
Largest Integer not Sum of Two Abundant Numbers


Sources
1964: Thomas R. Parkin and Leon J. Lander: Abundant Numbers
April 1965: Review of Abundant Numbers (Math. Comp. Vol. 19, no. 90: p. 334)




