# 

Source: https://proofwiki.org/wiki/User:RandomUndergrad



Lacklustre Bio
No longer a final year Math student at CUHK.

Random Proofs (Poorly Formatted)
23...3^2 = 54...428...89
Cyclic Permutations Preserve Divisibility
Number of Partitions with no Multiple of n equals Number of Partitions where Parts appear less than n times
Generalisation of Nicomachus's Theorem
Volume of Unit Hypersphere
Square as Difference between Square and Square of Reversal
Potential Solution to Dudeney Problem 109
Bounds to Recursive Functions

Thousand Separators
The program I attempted to use to finish Pandigital Numbers Divisible by All Integers up to 18, but alas it is off by a factor of $19$.
Since I am not putting $>600 \times 3$ lines of verification in the page, here is the program whose skeleton can be extracted for similar programs in the future.

#include <stdio.h>

int main()
{
    long int i,j;
    int count = 0;
    for (i=6; i<43; i++)
    {
        j=232792560;
        j*=i;
        if (i%5!=0)
        {
            count++;
            printf("{{eqn | l = %ld N\n      | r = ", i);
            printf("%ld \\, ", j/1000000000);
            if ((j/1000000)%1000<100)
                printf("0");
            if ((j/1000000)%1000<10)
                printf("0");
            printf("%ld \\, ", (j/1000000)%1000);
            if ((j/1000)%1000<100)
                printf("0");
            if ((j/1000)%1000<10)
                printf("0");
            printf("%ld \\, ", (j/1000)%1000);
            if (j%1000<100)
                printf("0");
            if (j%1000<10)
                printf("0");
            printf("%ld\n}}\n", j%1000);
        }
    }
    printf("%d",count);
}

Its predecessor has been used to find the largest and smallest pandigital squares.


Primes Expressible as $x^2+ny^2$
I'll put this here for (my) future reference:

#include <stdio.h>
int main(){int n,x,y;for(n=1;n<11;n++)for(x=1;x<33;x++)for(y=1;y<33;y++)if(x*x+y*y*n==1009)printf("1009=%d^2+%dx%d^2\n",x,n,y);}

also

1129=20^2+1x27^2
1129=27^2+1x20^2
1129=29^2+2x12^2
1129=19^2+3x16^2
1129=27^2+4x10^2
1129=2^2+5x15^2
1129=23^2+6x10^2
1129=11^2+7x12^2
1129=29^2+8x6^2
1129=20^2+9x9^2
1129=33^2+10x2^2


Sum of Product of $k$ Consecutive Integers













\(\ds \sum_{i \mathop = m} ^ n \prod_{k \mathop = 0} ^ l (i + k)\)

\(=\)







\(\ds \sum_{i \mathop = m} ^ n i (i + 1) \cdots (i + l)\)





$= [ m (m + 1) \cdots (m + l) ] + [ (m + 1) (m + 2) \cdots (m + l + 1) ] + \cdots + [ n (n + 1) \cdots (n + l) ]$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = m} ^ n \dfrac {(i + l) !} {(i - 1) !}\)





Definiton of Factorials














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = m} ^ n \dfrac {(i + l) !} {(i - 1) ! (l + 1) !} \times (l + 1) !\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = m} ^ n \binom {l + i} {l + 1} (l + 1) !\)





Definiton of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds (l + 1) ! \paren {\sum_{i \mathop = 1} ^ n \binom {l + i} {l + 1} - \sum_{i = 1} ^ {m - 1} \binom {l + i} {l + 1} }\)




















\(\ds \)

\(=\)







\(\ds (l + 1) ! \paren {\binom {l + n + 1} {l + 2} - \binom {l + m} {l + 2} }\)





Rising Sum of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds (l + 1) ! \paren {\dfrac {(l + n + 1) !} {(l + 2) ! (n - 1) !} - \dfrac {(l + m) !} {(l + 2) ! (m - 2) !} }\)





Definiton of Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \dfrac 1 {l + 2} \paren {\dfrac {(l + n + 1) !} {(n - 1) !} - \dfrac {(l + m) !} {(m - 2) !} }\)





Definiton of Factorials














\(\ds \)

\(=\)







\(\ds \dfrac 1 {l + 2} \paren {n (n + 1) \cdots (n + l + 1) - (m - 1) (m) (m + 1) \cdots (m + l) }\)





Definiton of Factorials



$\blacksquare$

In particular, when $m = 1$, the theorem takes a nice form:














\(\ds \sum_{i \mathop = 1}^n \prod_{k \mathop = 0} ^ l (i + k)\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n i (i + 1) \cdots (i + l)\)

\(\ds = \frac {n (n + 1) \cdots (n + l + 1)} {l + 2}\)








For $l = 0$, $\ds \sum_{i \mathop = 1} ^ n i = \dfrac {n (n + 1)} 2$ which is Closed Form for Triangular Numbers

For $l = 1$, $\ds \sum_{i \mathop = 1} ^ n i (i + 1) = \dfrac {n (n + 1) (n + 2)} 3$ which is Sum of Sequence of Products of Consecutive Integers

Credit: The relationship between binomial coefficients and products of consecutive integers was noticed by my friend Oscar, whose observation allowed for a intuitive view to the validity of the equation.

My original proof for the cases $m = 0$ was an induction on $n$ with a fixed $l$.
For $n = 1$, $RHS = \dfrac {1 (2) \cdots (1 + l + 1)} {l + 2} = (l + 1) ! = LHS$
For the induction step, assume $\ds \sum_{i \mathop = 1} ^ m i (i + 1) \cdots (i + l) = \dfrac {m (m + 1) \cdots (m + l + 1)} {l + 2}$.
Then 














\(\ds \sum_{i \mathop = 1} ^ {m + 1} i (i + 1) \cdots (i + l)\)

\(=\)







\(\ds \dfrac {m (m + 1) \cdots (m + l + 1)} {l + 2} + (m + 1) (m + 2) \cdots (m + l + 1)\)




















\(\ds \)

\(=\)







\(\ds \dfrac {(m + 1) (m + 2) \cdots (m + l + 1)} {l + 2} (m  + (l + 2))\)









The general theorem results from subtraction.
$\blacksquare$


Solution to Problem $1290$, mmmaa
See 1988: Problem 1290 (Math. Mag. Vol. 61, no. 1: pp. 46 – 59)  www.jstor.org/stable/2690332

For positive integers $n$ and $r$, find a closed form expression for $\ds \sum_{r \mathop = 1}^k r \binom {n + r - 1} r$.













\(\ds \sum_{r \mathop = 1}^k r \binom {n + r - 1} r\)

\(=\)







\(\ds \sum_{r \mathop = 1}^k r \binom {n + r - 1} {n - 1}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^k r \frac {\paren {n + r - 1} \paren {n + r - 2} \dots \paren {1 + r} } {\paren {n - 1}!}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {n - 1}!} \sum_{r \mathop = 1}^k r \paren {r + 1} \dots \paren {r + n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {n - 1}!} \times \frac {k \paren {k + 1} \cdots \paren {k + n} } {n + 1}\)





taking $i = r, l = n - 1, n = k$ in the theorem above in 'nice form'














\(\ds \)

\(=\)







\(\ds \frac n {\paren {n + 1}!} \times \frac {\paren {k + n}!} {\paren {k - 1}!}\)




















\(\ds \)

\(=\)







\(\ds n \binom {n + k} {n + 1}\)





Definition of Binomial Coefficient



One may, of course, avoid the use of this theorem by proceeding from the third step as follows:














\(\ds \frac 1 {\paren {n - 1}!} \sum_{r \mathop = 1}^k r \paren {r + 1} \dots \paren {r + n - 1}\)

\(=\)







\(\ds \frac n {n!} \sum_{r \mathop = 1}^k \frac {\paren {r + n - 1}!} {\paren {r - 1}!}\)




















\(\ds \)

\(=\)







\(\ds n \sum_{r \mathop = 1}^k \binom {n + r - 1} n\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n \sum_{r \mathop = 0}^{k - 1} \binom {n + r} n\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds n \binom {n + k} {n + 1}\)





Rising Sum of Binomial Coefficients



In their notation $\ds \sequence {n \atop r}:= \binom {n + r - 1} r$, we will have:

$\ds \sum_{r \mathop = 1}^k r \sequence {n \atop r} = n \sequence {k \atop {n + 1} }$
$\blacksquare$

I wish to generalize this result to arithmetic progressions at some point.

Potential Corollary and its Generalisation
We have:














\(\ds 1 + 2\)

\(=\)







\(\ds 3\)




















\(\ds 4 + 5 + 6\)

\(=\)







\(\ds 7 + 8\)




















\(\ds 9 + 10 + 11 + 12\)

\(=\)







\(\ds 13 + 14 + 15\)




















\(\ds \)

\(:\)







\(\ds \)









Can't find related result - a visual proof was given by RBN in PWW.














\(\ds T_1 + T_2 + T_3\)

\(=\)







\(\ds T_4\)




















\(\ds T_5 + T_6 + T_7 + T_8\)

\(=\)







\(\ds T_9 + T_{10}\)




















\(\ds T_{11} + T_{12} + T_{13} + T_{14} + T_{15}\)

\(=\)







\(\ds T_{16} + T_{17} + T_{18}\)




















\(\ds \)

\(:\)







\(\ds \)





Sum of Adjacent Sequences of Triangular Numbers







