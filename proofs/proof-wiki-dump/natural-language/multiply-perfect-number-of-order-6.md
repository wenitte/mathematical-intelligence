# 

Source: https://proofwiki.org/wiki/Multiply_Perfect_Number_of_Order_6



Theorem
The number defined as:

$n = 2^{36} \times 3^8 \times 5^5 \times 7^7 \times 11 \times 13^2 \times 19 \times 31^2$
$\times \ 43 \times 61 \times 83 \times 223 \times 331 \times 379 \times 601 \times 757 \times 1201$
$\times \ 7019 \times 112 \, 303 \times 898 \, 423 \times 616 \, 318 \, 177$
is multiply perfect of order $6$.


Proof
From Divisor Sum Function is Multiplicative, we may take each prime factor separately and form $\map {\sigma_1} n$ as the product of the divisor sum of each.

Each of the prime factors which occur with multiplicity $1$ will be treated first.
A prime factor $p$ contributes towards the combined $\sigma_1$ a factor $p + 1$.

Hence we have:














\(\ds \map {\sigma_1} {11}\)

\(=\)







\(\ds 12\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 3\)
























\(\ds \map {\sigma_1} {19}\)

\(=\)







\(\ds 20\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 5\)
























\(\ds \map {\sigma_1} {43}\)

\(=\)







\(\ds 44\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 11\)
























\(\ds \map {\sigma_1} {61}\)

\(=\)







\(\ds 62\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 31\)
























\(\ds \map {\sigma_1} {83}\)

\(=\)







\(\ds 84\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 3 \times 7\)
























\(\ds \map {\sigma_1} {223}\)

\(=\)







\(\ds 224\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^5 \times 7\)
























\(\ds \map {\sigma_1} {331}\)

\(=\)







\(\ds 332\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 83\)
























\(\ds \map {\sigma_1} {379}\)

\(=\)







\(\ds 380\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 5 \times 19\)
























\(\ds \map {\sigma_1} {601}\)

\(=\)







\(\ds 602\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 7 \times 43\)
























\(\ds \map {\sigma_1} {757}\)

\(=\)







\(\ds 758\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 379\)
























\(\ds \map {\sigma_1} {1201}\)

\(=\)







\(\ds 1202\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 601\)
























\(\ds \map {\sigma_1} {7019}\)

\(=\)







\(\ds 7020\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^2 \times 3^3 \times 5 \times 13\)
























\(\ds \map {\sigma_1} {112 \, 303}\)

\(=\)







\(\ds 112 \, 304\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^4 \times 7019\)
























\(\ds \map {\sigma_1} {898 \, 423}\)

\(=\)







\(\ds 898 \, 424\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2^3 \times 112 \, 303\)
























\(\ds \map {\sigma_1} {616 \, 318 \, 177}\)

\(=\)







\(\ds 616 \, 318 \, 178\)





Divisor Sum of Prime Number














\(\ds \)

\(=\)







\(\ds 2 \times 7^3 \times 898 \, 423\)










The remaining factors are treated using Divisor Sum of Power of Prime:

$\map {\sigma_1} {p^k} = \dfrac {p^{k + 1} - 1} {p - 1}$

Thus:














\(\ds \map {\sigma_1} {2^{36} }\)

\(=\)







\(\ds 2 \times 2^{36} - 1\)





Divisor Sum of Power of 2














\(\ds \)

\(=\)







\(\ds 137 \, 438 \, 953 \, 471\)




















\(\ds \)

\(=\)







\(\ds 223 \times 616 \, 318 \, 177\)
























\(\ds \map {\sigma_1} {3^8}\)

\(=\)







\(\ds \dfrac {3^9 - 1} {3 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {19 \, 683 - 1} 2\)




















\(\ds \)

\(=\)







\(\ds 9841\)




















\(\ds \)

\(=\)







\(\ds 13 \times 757\)
























\(\ds \map {\sigma_1} {5^5}\)

\(=\)







\(\ds \dfrac {5^6 - 1} {5 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {15 \, 625 - 1} 4\)




















\(\ds \)

\(=\)







\(\ds 3906\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3^2 \times 7 \times 31\)
























\(\ds \map {\sigma_1} {7^7}\)

\(=\)







\(\ds \dfrac {7^8 - 1} {7 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {5 \, 764 \, 801 - 1} 6\)




















\(\ds \)

\(=\)







\(\ds 960 \, 800\)




















\(\ds \)

\(=\)







\(\ds 2^5 \times 5^2 \times 1201\)
























\(\ds \map {\sigma_1} {13^2}\)

\(=\)







\(\ds \dfrac {13^3 - 1} {13 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {2197 - 1} {12}\)




















\(\ds \)

\(=\)







\(\ds 183\)




















\(\ds \)

\(=\)







\(\ds 3 \times 61\)
























\(\ds \map {\sigma_1} {31^2}\)

\(=\)







\(\ds \dfrac {31^3 - 1} {31 - 1}\)





Divisor Sum of Power of Prime














\(\ds \)

\(=\)







\(\ds \dfrac {29 \, 791 - 1} {30}\)




















\(\ds \)

\(=\)







\(\ds 993\)




















\(\ds \)

\(=\)







\(\ds 3 \times 331\)










Gathering up the prime factors, we have:

$\map {\sigma_1} n = 2^{37} \times 3^9 \times 5^5 \times 7^7 \times 11 \times 13^2 \times 19 \times 31^2$
$\times \ 43 \times 61 \times 83 \times 223 \times 331 \times 379 \times 601 \times 757 \times 1201$
$\times \ 7019 \times 112 \, 303 \times 898 \, 423 \times 616 \, 318 \, 177$

By inspection of the multiplicities of the prime factors of $n$ and $\map {\sigma_1} n$, it can be seen that they match for all except for $2$ and $3$.
It follows that $\map {\sigma_1} n = 2 \times 3 \times n = 6 n$.
Hence the result.
$\blacksquare$


Historical Note
Marin Mersenne, in a letter of $1643$, challenged Pierre de Fermat to find the ratio of:

$2^{36} \times 3^8 \times 5^5 \times 11 \times 13^2 \times 19 \times 31^2$
$\times \ 43 \times 61 \times 83 \times 223 \times 331 \times 379 \times 601 \times 757 \times 1201$
$\times \ 7019 \times 823 \, 543 \times 616 \, 318 \, 177 \times 100 \, 895 \, 598 \, 169$
to its aliquot sum.
Fermat replied that its ratio to the sum of all its divisors (including the number itself) was $6$.
He also pointed out that $100 \, 895 \, 598 \, 169 = 112 \, 303 \times 898 \, 423$, both of which divisors are prime.
Also note that $823 \, 543 = 7^7$, another point that Marin Mersenne glossed over, intentionally or inadvertently, in his initial challenge.
Both Mersenne's initial challenge and Fermat's factorisation of $100 \, 895 \, 598 \, 169$ were remarkable, considering the lack of computing machines in those days.  To this day, nobody knows how they did it.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $100,895,598,169$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $100,895,598,169$




