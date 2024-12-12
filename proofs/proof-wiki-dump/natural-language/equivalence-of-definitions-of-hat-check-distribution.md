# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Hat-Check_Distribution



Theorem
The following definitions of the concept of Hat-Check Distribution are equivalent:

Definition 1
$X$ has the hat-check distribution with parameter $n$ if and only if:

$\ds \map \Pr {X = k} = \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}$
Definition 2
$X$ has the hat-check distribution with parameter $n$ if and only if:

$\ds \map \Pr {X = k} = \dfrac {!k} {n! } \dbinom n k$
where:

$!k$ is the subfactorial of $k$
$\dbinom n k$ is the binomial coefficient.


Proof
Beginning with the first definition, we have:














\(\ds \dfrac 1 {\paren {n - k }!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)

\(=\)







\(\ds \dfrac 1 {\paren {n - k }!} \dfrac {n! k!} {n! k!} \sum_{s \mathop = 0}^k \dfrac {\paren {-1}^s} {s!}\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {n - k }!} \dfrac {n!} {n! k!} !k\)





Definition of Subfactorial














\(\ds \)

\(=\)







\(\ds \dfrac 1 {n! } \dbinom n k !k\)





Definition of Binomial Coefficient



$\blacksquare$





