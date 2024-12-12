# 

Source: https://proofwiki.org/wiki/Four_Fours/Lemmata/One_Four/64/Solutions/1



Puzzle: One Four: $64$
Using exactly $1$ instance of the number $4$, the task is to write an expression for $64$, using whatever arithmetical operations you consider necessary.


Solution
$64 = \floor {\surd \surd \surd \surd \surd \surd \surd \surd \surd \floor {\surd \surd \surd \surd \surd \surd \surd \surd \surd \floor {\surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \floor {\surd \surd \surd \surd \surd \surd \surd \surd \floor { \surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \surd \floor {\surd \floor {\surd \floor {\surd \surd \surd \surd \surd \paren {4!} !} !} !} !} !} !} !} !}$
where:

$x!$ denotes the factorial of $x$
$\floor x$ denotes the floor function of $x$.


Proof
Note that in the below, factorial has a higher binding priority than the square root function.
That is, $\surd x!$ means $\sqrt {\paren {x!} }$ and not $\paren {\sqrt x} !$.

We have that:














\(\ds 5^{32}\)

\(=\)







\(\ds 232 \, 83064 \, 36538 \, 69628 \, 90625\)




















\(\ds 24!\)

\(=\)







\(\ds 6204 \, 48401 \, 73323 \, 94393 \, 60000\)





Factorial of $24$














\(\ds 6^{32}\)

\(=\)







\(\ds 79586 \, 61109 \, 94640 \, 08843 \, 91936\)














\(\ds \leadsto \ \ \)





\(\ds 5\)

\(<\)







\(\ds \sqrt [32] {24!}\)




















\(\ds \)

\(<\)







\(\ds 6\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \floor {\surd \surd \surd \surd \surd \paren {4!} !}\)

\(=\)







\(\ds 5\)










Then:














\(\ds \floor {\surd \floor {\surd \surd \surd \surd \surd \paren {4!} !} !}\)

\(=\)







\(\ds \floor {\surd 5 !}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \floor {\surd 120}\)




















\(\ds \)

\(=\)







\(\ds \floor {10.95 ...}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds 10\)










Then:














\(\ds \floor {\surd \floor {\surd \floor {\surd \surd \surd \surd \surd \paren {4!} !} !} !}\)

\(=\)







\(\ds \floor {\surd 10!}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \floor {\surd 3628800}\)




















\(\ds \)

\(=\)







\(\ds \floor {1904.94 ...}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1904\)









The pattern continues.

We see that the $k$th floor function evaluates to the integer $a_k$ such that:

${a_k}^{2^t} < a_{k - 1} ! < \paren {a_k + 1}^{2^t}$
where $t$ is the number of square root signs between the floor function delimiters.

Laborious evaluation then allows us to construct the following table:

$\begin {array} {crrlll}
k & a_k & t & {a_k}^{2^t} & a_{k - 1} ! & \paren {a_k + 1}^{2^t} \\
0 & 24   &    &   &   &   \\
1 & 5    & 5  & 0.23 \times 10^{23} & 0.62 \times 10^{24} & 0.79 \times 10^{25} \\
2 & 10   & 1  & 100 & 120 & 121 \\
3 & 1904 & 1  & 36 \, 25216 & 36 \, 28800 & 39 \, 29025 \\
4 & 442  & 11 & 0.67 \times 10^{5417} & 0.42 \times 10^{5419} & 0.68 \times 10^{5419} \\
5 & 6673 & 8  & 0.1062 \times 10^{979} & 0.1097 \times 10^{979} & 0.1104 \times 10^{979} \\
6 & 577  & 13 & 0.4 \times 10^{22619} & 0.9 \times 10^{22623} & 0.5 \times 10^{22625} \\
7 & 422  & 9  & 0.14 \times 10^{1344} & 0.25 \times 10^{1344} & 0.49 \times 10^{1344} \\
8 & 64   & 9  & 0.58 \times 10^{924} & 0.21 \times 10^{926} & 0.16 \times 10^{928} \\
\end {array}$

From Floor of Root of Floor equals Floor of Root, we have:

$\ds \floor {\sqrt {\floor x} } = \floor {\sqrt x}$
so we need only to take the floor function of the entire result, and before the factorial is evaluated.

The result follows.
$\blacksquare$

Note in passing that $\floor {\surd 10} = 3$, allowing us an expression for $3$ using one $4$:

$3 = \floor {\surd \floor {\surd \floor {\surd \surd \surd \surd \surd \paren {4!} !} !} }$
from $(2)$ above.

Similarly, as $3! = 6$, we have a similar expression for $6$:

$6 = \floor {\surd \floor {\surd \floor {\surd \surd \surd \surd \surd \paren {4!} !} !} }!$


Sources
1964: Donald E. Knuth: Representing Numbers using Only One Four (Math. Mag. Vol. 37: pp. 308 – 310)  www.jstor.org/stable/2689238




