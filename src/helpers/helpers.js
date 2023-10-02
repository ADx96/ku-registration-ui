export function getSemester(data) {
    if (!data) {
        return
    }
    switch (data) {
        case 1:
            return 'الأول'
        case 2:
            return 'الثاني'
        case 3:
            return 'الصيفي'
        default:
            throw new Error('Unknown step')
    }
}

export function getReason(data) {
    if (!data) {
        return
    }
    switch (data) {
        case 1:
            return 'تعارض الوقت مع مقررات اخري'
        case 2:
            return 'ظروف العمل (ارفاق من يبن ذلك)'
        case 3:
            return 'سبب اخر'
        default:
            throw new Error('Unknown step')
    }
}

export function getGovernor(data) {
    if (!data) {
        return
    }
    switch (data) {
        case 1:
            return 'محافظة العاصمة'
        case 2:
            return 'محافظة حولي'
        case 3:
            return 'محافظة الأحمدي'
        case 4:
            return 'محافظة الجهراء'
        case 5:
            return 'محافظة الفروانية'
        case 6:
            return 'محافظة مبارك الكبير'
        default:
            throw new Error('Unknown step')
    }
}

export function getUniversity(data) {
    if (!data) {
        return
    }
    switch (data) {
        case 1:
            return 'كلية الشريعة و الدراسات الاسلامية'
        case 2:
            return 'كلية الاداب'
        case 3:
            return 'كلية التربية'
        case 4:
            return 'كلية الحقوق'
        case 5:
            return 'كلية الدراسات العليا'
        case 6:
            return 'كلية الصحة العامة'
        case 7:
            return 'كلية الصيدلة'
        case 8:
            return 'كلية الطب'
        case 9:
            return 'كلية العلوم'
        case 10:
            return 'كلية العلوم الاجتماعية'
        case 11:
            return 'كلية العلوم الحياتية'
        case 12:
            return 'كلية العلوم الإدارية'
        case 13:
            return 'كلية العلوم الطبية المساعدة'
        case 14:
            return 'كلية العمارة'
        case 15:
            return 'كلية الهندسة و البترول'
        case 16:
            return 'كلية طب الأسنان'
        default:
            throw new Error('Unknown step')
    }
}
