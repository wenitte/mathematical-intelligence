# 

Source: https://proofwiki.org/wiki/Prime_Factors_of_1000_Factorial



Example of Factorial
The prime decomposition of $1000!$ is given as:














\(\ds 1000!\)

\(=\)







\(\ds 2^{994} \times 3^{498} \times 5^{249} \times 7^{164} \times 11^{98} \times 13^{81} \times 17^{61} \times 19^{54} \times 23^{44} \times 29^{35} \times 31^{33} \times 37^{27}\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 41^{24} \times 43^{23} \times 47^{21} \times 53^{18} \times 59^{16} \times 61^{16} \times 67^{14} \times 71^{14} \times 73^{13} \times 79^{13} \times 83^{12} \times 89^{11}\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 97^{10} \times 101^9 \times 103^9 \times 107^9 \times 109^9 \times 113^8 \times 127^7 \times 131^7 \times 137^7 \times 139^7 \times 149^6 \times 151^6\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 157^6 \times 163^6 \times 167^5 \times 173^5 \times 179^5 \times 181^5 \times 191^5 \times 193^5 \times 197^5 \times 199^5 \times 211^4 \times 223^4\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 227^4 \times 229^4 \times 233^4 \times 239^4 \times 241^4 \times 251^3 \times 257^3 \times 263^3 \times 269^3 \times 271^3 \times 277^3 \times 281^3\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 283^3 \times 293^3 \times 307^3 \times 311^3 \times 313^3 \times 317^3 \times 331^3 \times 337^2 \times 347^2 \times 349^2 \times 353^2 \times 359^2\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 367^2 \times 373^2 \times 379^2 \times 383^2 \times 389^2 \times 397^2 \times 401^2 \times 409^2 \times 419^2 \times 421^2 \times 431^2 \times 433^2\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 439^2 \times 443^2 \times 449^2 \times 457^2 \times 461^2 \times 463^2 \times 467^2 \times 479^2 \times 487^2 \times 491^2 \times 499^2 \times 503\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 509 \times 521 \times 523 \times 541 \times 547 \times 557 \times 563 \times 569 \times 571 \times 577 \times 587 \times 593\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 599 \times 601 \times 607 \times 613 \times 617 \times 619 \times 631 \times 641 \times 643 \times 647 \times 653 \times 659\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 661 \times 673 \times 677 \times 683 \times 691 \times 701 \times 709 \times 719 \times 727 \times 733 \times 739 \times 743\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 751 \times 757 \times 761 \times 769 \times 773 \times 787 \times 797 \times 809 \times 811 \times 821 \times 823 \times 827\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 829 \times 839 \times 853 \times 857 \times 859 \times 863 \times 877 \times 881 \times 883 \times 887 \times 907 \times 911\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 919 \times 929 \times 937 \times 941 \times 947 \times 953 \times 967 \times 971 \times 977 \times 983 \times 991 \times 997\)











Proof
For each prime factor $p$ of $1000!$, let $a_p$ be the integer such that:

$p^{a_p} \divides 1000!$
$p^{a_p + 1} \nmid 1000!$

Taking the prime factors in turn:


Multiplicity of $2$
The prime factor $2$ appears in $1000!$ to the power of $994$.
That is:

$2^{994} \divides 1000!$
but:

$2^{995} \nmid 1000!$


Multiplicity of $3$
The prime factor $3$ appears in $1000!$ to the power of $498$.
That is:

$3^{498} \divides 1000!$
but:

$3^{499} \nmid 1000!$


Multiplicity of $5$
The prime factor $5$ appears in $1000!$ to the power of $249$.
That is:

$5^{249} \divides 1000!$
but:

$5^{250} \nmid 1000!$


Multiplicity of $7$
The prime factor $7$ appears in $1000!$ to the power of $164$.
That is:

$7^{164} \divides 1000!$
but:

$7^{165} \nmid 1000!$


Multiplicity of $11$
The prime factor $11$ appears in $1000!$ to the power of $98$.
That is:

$11^{98} \divides 1000!$
but:

$11^{99} \nmid 1000!$


Multiplicity of $13$
The prime factor $13$ appears in $1000!$ to the power of $81$.
That is:

$13^{81} \divides 1000!$
but:

$13^{82} \nmid 1000!$

And so on: for the remaining factors:














\(\ds a_{17}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {17^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {17} } + \floor {\frac {1000} {289} }\)




















\(\ds \)

\(=\)







\(\ds 58 + 3\)




















\(\ds \)

\(=\)







\(\ds 61\)
























\(\ds a_{19}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {19^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {19} } + \floor {\frac {1000} {361} }\)




















\(\ds \)

\(=\)







\(\ds 52 + 2\)




















\(\ds \)

\(=\)







\(\ds 54\)
























\(\ds a_{23}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {23^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {23} } + \floor {\frac {1000} {529} }\)




















\(\ds \)

\(=\)







\(\ds 43 + 1\)




















\(\ds \)

\(=\)







\(\ds 44\)
























\(\ds a_{29}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {29^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {29} } + \floor {\frac {1000} {841} }\)




















\(\ds \)

\(=\)







\(\ds 34 + 1\)




















\(\ds \)

\(=\)







\(\ds 35\)
























\(\ds a_{31}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {31^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {31} } + \floor {\frac {1000} {961} }\)




















\(\ds \)

\(=\)







\(\ds 32 + 1\)




















\(\ds \)

\(=\)







\(\ds 33\)
























\(\ds a_{37}\)

\(=\)







\(\ds \sum_{k \mathop > 0} \floor {\frac {1000} {37^k} }\)





De Polignac's Formula














\(\ds \)

\(=\)







\(\ds \floor {\frac {1000} {37} }\)




















\(\ds \)

\(=\)







\(\ds 27\)










The pattern is clear: the remaining indices are calculated in the same way.
$\blacksquare$





